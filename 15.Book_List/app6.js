class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById("book-list");
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' id="delete">X</a></td>
        `;

        list.appendChild(row);
    }

    clearFields() {

        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    showAlert(msg, className) {
        const div = document.createElement('div');
        div.className = `alert text-center font-bold text-xl ${className}`
        div.appendChild(document.createTextNode(msg));
    
        const container = document.querySelector('.container')
        const form = document.getElementById('book-form');
    
        container.insertBefore(div, form);
    
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },2000)

    }

    deleteBook(target) {
        if(target.getAttribute('id') === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
}

// local storage class
class Store {
    static getBooksFromLS() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = []
        } else {
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books;
    }

    static displayFromLS(book) {
        const books = Store.getBooksFromLS()

        books.forEach(function(book){
            const ui = new UI;

            ui.addBookToList(book)
        })
    }

    static addBook(book) {
        const books = Store.getBooksFromLS();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooksFromLS();

        books.forEach(function(book, index) {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// DOM load event
document.addEventListener('DOMContentLoaded',Store.displayFromLS)

// submit the book to the table
document.getElementById('book-form').addEventListener('submit',function(e){
    e.preventDefault();

    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isbn = document.getElementById('isbn').value

    const book = new Book(title, author, isbn);

    const uiEl = new UI();

    if(title === '' || author === '' || isbn === '' ){
        // Alert
        uiEl.showAlert('Missing field', 'error')
    } else {
        uiEl.addBookToList(book);
        Store.addBook(book);

        uiEl.showAlert('Book Added', 'success')
        
        uiEl.clearFields();
    }

})

// delete the book from the table
document.getElementById('book-list').addEventListener('click', function(e) {
    e.preventDefault()

    const uiEl = new UI();

    uiEl.deleteBook(e.target);

    // local storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)

    uiEl.showAlert("Book Removed", "success");
})