// Note: Please do not change the name of the functions. The tests use those names to validate your code.


//returns the author object that has the matching ID.
function findAuthorById(authors, id) {
  for (let i = 0; i<authors.length;i++){
    if (authors[i].id===id){
      return authors[i];
    }
  }
}

//It returns the book object that has the matching ID.
function findBookById(books, id) {
  console.log(books);
  console.log(id);
  return books.filter((book)=>book.id===id)[0];
  //console.log(filtered);
  //return filtered;

  // for(let i =0; i<books.length;i++){
  //   if(books[i].id===id){
  //     return books[i];
  //   }
  // }
}

// It returns an array with two arrays inside of it. All of the inputted books are present in either the first or second array.
// The first array contains books _that have been loaned out, and are not yet returned_ 
// while the second array contains books _that have been returned.
// _ You can check for the return status by looking at the first transaction in the `borrows` array.

function partitionBooksByBorrowedStatus(books) {
  //returns two arrays, 
  let currentlyOut = [];
  let currentlyIn = [];
  for (let book in books){
    const status = (books[book].borrows[0].returned);

    status ? currentlyIn.push(books[book]):currentlyOut.push(books[book]);
    // if(status===true){
    //   currentlyIn.push(books[book]);
    // }else{
    //   currentlyOut.push(books[book]);
    // }
    
  }
  //console.log(currentlyIn);
  final = [currentlyOut,currentlyIn];
  return final;
}

//It should return an array of all the transactions from the book's `borrows` key. 
//However, each transaction should include the related account information and the `returned` key.

/*
  [
    {
      id: "5f446f2e4eff1030e7316861",
      returned: true,
      picture: "https://api.adorable.io/avatars/75/barber.waters@kegular.biz",
      age: 37,
      name: {
        first: "Barber",
        last: "Waters",
      },
      company: "KEGULAR",
      email: "barber.waters@kegular.biz",
      registered: "Tuesday, April 14, 2020 9:15 PM",
    },
    {
      id: "5f446f2ecc5c4787c403f844",
      returned: true,
      picture: "https://api.adorable.io/avatars/75/dyer.trevino@slax.io",
      age: 34,
      name: {
        first: "Dyer",
        last: "Trevino",
      },
      company: "SLAX",
      email: "dyer.trevino@slax.io",
      registered: "Saturday, August 1, 2015 8:13 PM",
    },
  ]
*/

function getBorrowersForBook(book, accounts) {
  //returning an array so initialize an array
  let result = [];
  //accessing the borrows array from the book
  let borrowArray = book.borrows;  
  //finding the account associated with each Id in the borrow array
  borrowArray.forEach(borrow=>{
    //assigning that to a new variable at the same time
    let account = accounts.find(acc => acc.id === borrow.id);
    //initializing a new object with that object so we can add returned to it before we push it to array
    let obj = account;
    //using oject shorthand to assign the returned variable back to a new key in the new object
    obj['returned'] =  borrow.returned;
    //pushing that object into the results array
    result.push(obj);
  })
  //console.log(result);
  //returning only first ten of array
  return result.slice(0,10);
}
  


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
