function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
function UI() {
}

// add book
UI.prototype.addBookToList = function(book) {
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

UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// show pop up / alert
UI.prototype.showAlert = function(msg, className) {
    // create div
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

// delete book -----CHECK THIS
UI.prototype.deleteBook = function(target) {
    if(target.getAttribute('id') === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

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

        uiEl.showAlert('Book Added', 'success')
        
        uiEl.clearFields();
    }

})

document.getElementById('book-list').addEventListener('click', function(e) {
    e.preventDefault()

    const uiEl = new UI();

    uiEl.deleteBook(e.target);

    uiEl.showAlert("Book Removed", "success");
})