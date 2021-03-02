// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  //loop through the accounts
  for (let i = 0; i <accounts.length;i++){
    if(accounts[i].id===id) {
      return accounts[i];
    };
  }
}

function sortAccountsByLastName(accounts) {
  const sorted = accounts.sort((accountsA, accountsB) => (accountsA.name.last > accountsB.name.last ? 1 : -1));;
  return sorted;
}

//It returns a _number_ that represents the number of times the account's ID appears in any book's `borrow` array.
function getTotalNumberOfBorrows(account, books) {
  //console.log(account.id);
  //isolate the borrowed id objects
  let numberOfBorrows = 0;
  //console.log(books[0].borrows[0].id);
  const borrows = books.map((book)=>book.borrows);
  //console.log(borrows[0][0].id);
  for(let i=0;i<borrows.length;i++){
    for(let j=0;j<borrows[i].length;j++){
      //console.log(borrows[i][j].id);
      if(borrows[i][j].id===account.id){
        numberOfBorrows += 1;
      }
    }
  }
  return numberOfBorrows;
}


//It returns an array of books and authors that represents all books _currently checked out_ by the given account. 
//_Look carefully at the object below,_ as it's not just the book object; the author object is embedded inside of it.
/*
  [
    {
      id: "5f447132320b4bc16f950076",
      title: "est voluptate nisi",
      genre: "Classics",
      authorId: 12,
      author: {
        id: 12,
        name: {
          first: "Chrystal",
          last: "Lester",
        },
      },
      borrows: [
        {
          id: "5f446f2e6059326d9feb9a68",
          returned: false,
        },
        ...
      ],
    },
  ]
*/
// function helperFunction(books,authors){
//   for (let book in books){
//     //let authorObject = books[book].authorId;
//     for(let author in authors){
//       if(author.id===books[book].authorId){
//         return author;
//       }
//     }
//   }
// }


function getBooksPossessedByAccount(account, books, authors) {

  //Initialze a return array
  let booksPossessed=[];
  //check for the account id in the borrows arrays, and that the book is not returned
  books.forEach(book => {
    let borrowArray = book.borrows;
    if (borrowArray.find(borrow => borrow.id === account.id && borrow.returned === false)) {

      booksPossessed.push(book);
    }
  })
  //Add the author details to the book
  booksPossessed.forEach(book=>{
    let author = authors.find(person => person.id === book.authorId);
    book['author'] = author;
  })
  //console.log(booksPossessed);
  return booksPossessed;
  
}
//   //Initialze a return array
//   let booksPossessed=[];
//   //check for the account id in the borrows arrays
//   for (let book in books){
//     const borrowerLog = (books[book].borrows);
//     //console.log(books[book].authorId);
//     //and then cycle through each books borrows to check for the id
//     for(let borrower in borrowerLog){
      
//       if(borrowerLog[borrower].id===account.id){
//         booksPossessed.push(books[book]);
//         //Need to add author to the object
//       }
//     }
//   }
//   //need to embed author object inside of book objects
  
// }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
