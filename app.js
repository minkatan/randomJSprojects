// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];



function add(bookList , bookName) {
// Change code below this line
  const list = bookList
  list.push(bookName);
  return list;
  
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  const list = bookList
  const book_index = list.indexOf(bookName);
  if (book_index >= 0) {

    list.splice(book_index, 1);
    return list;

    // Change code above this line
    }
}
const x = add(bookList, "A Brief History of Time")
console.log(x)
console.log(bookList)