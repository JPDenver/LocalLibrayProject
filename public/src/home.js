// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  totalBooks = 0;
  for(let book in books){
    totalBooks += 1;
  }
  return totalBooks;
}

//It returns a number that represents the number of book objects inside of the array.
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function helperFunction(a,b){
  return a===b;
}

//It returns a number that represents the number of books _that are currently checked out of the library.
//_ This number can be found by looking at the first transaction in the `borrows` key of each book. 
//If the transaction says the book has not been returned (i.e. `returned: false`), the book has been borrowed.
function getBooksBorrowedCount(books) {
  let currentlyOut = [];
  for (let book in books){
    const status = (books[book].borrows[0].returned);
    if(helperFunction(status,false)){
      currentlyOut.push(books[book]);
    }
    }
    return currentlyOut.length;
}

// It returns an array containing five objects or fewer that represents the most common occurring genres, 
//ordered from most common to least.

// Each object in the returned array has two keys:

// - The `name` key which represents the name of the genre.
// - The `count` key which represents the number of times the genre occurs.

// If more than five genres are present, only the top five should be returned.


function getMostCommonGenres(books) {
    //Need to create the object with the correct keys, objects inside of an array
//}
let arrayWithObjects = [];
  const objectWithKeys = books.reduce((acc,book)=>{
    let found =  arrayWithObjects.find(element => element.name === book.genre);
    if(helperFunction(found,undefined)){
      arrayWithObjects.push({name: book.genre, count: 1});
    }else{
      found.count +=1;
    }
  },[]);
  let sorted = arrayWithObjects.sort((genreA,genreB)=>genreA.count<genreB.count?1:-1);
  return sorted.slice(0,5);
}



// It returns an array containing five objects or fewer that represents the most popular books in the library. 
//Popularity is represented by the number of times a book has been borrowed.

// Each object in the returned array has two keys:

// - The `name` key which represents the title of the book.
// - The `count` key which represents the number of times the book has been borrowed.
/*
  [
    { name: "incididunt nostrud minim", count: 30 },
    { name: "culpa do sint", count: 30 },
    { name: "ullamco est minim", count: 29 },
    ...
  ]
*/

// If more than five books are present, only the top five should be returned.
function getMostPopularBooks(books) {
//map the books into the new object
  return books.map((book) => {
    //with the title and length of the borrows array
    return {name: book.title, count: book.borrows.length}
    //sort it and return the first five
   }).sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5)
}
  


// It returns an array containing five objects or fewer that represents the most popular authors whose books 
//have been checked out the most. Popularity is represented by finding all of the books written by the author 
//and then adding up the number of times those books have been borrowed.

// Each object in the returned array has two keys:

// - The `name` key which represents the first and last name of the author.
// - The `count` key which represents the number of times the author's books have been borrowed.

// If more than five authors are present, only the top five should be returned.


/*
  [
    { name: "Cristina Buchanan", count: 112 },
    { name: "Tami Hurst", count: 83 },
    { name: "Chrystal Lester", count: 80 },
    ...
  ]
*/

function getMostPopularAuthors(books, authors) { 
  let popularAuthors = []; 
  authors.forEach(author => { let theAuthor = { name: `${author.name.first} ${author.name.last}`, count: 0 } 
  books.forEach(book => { if (book.authorId === author.id) { theAuthor.count += book.borrows.length } }) 
  popularAuthors.push(theAuthor) }) 
  return popularAuthors.sort((a,b) => b.count - a.count).slice(0, 5) }





module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
