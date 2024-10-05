"use strict";

// Corrected: Use map instead of forEach to return an array
const carbonylGroups = ["aldehyde", "ketone", "carboxylic acid", "ester", "amide", "anhydride", "acid halide"];
const value = carbonylGroups.map((val) => val);
console.log(value);  // ["aldehyde", "ketone", "carboxylic acid", "ester", "amide", "anhydride", "acid halide"]

// Filtering the num array
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 21];
let nums = num.filter((cal) => {
  return cal > 4;
});
console.log(nums);  // [5, 6, 7, 8, 9, 10, 11, 21]

// This forEach loop does nothing because num is now empty
num = [];
num.forEach((dal) => {
  if (dal > 4) {
    nums.push(dal);
  }
});
console.log(nums);  // Still [5, 6, 7, 8, 9, 10, 11, 21]

// Books array
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 15.99,
    editionYear: 2006,
    publicationYear: 1960,
    copiesSold: 40000000,
    originalLanguage: "English",
    pages: 324,
    genre: "Fiction"
  },
  {
    title: "1984",
    author: "George Orwell",
    price: 12.50,
    editionYear: 2008,
    publicationYear: 1949,
    copiesSold: 30000000,
    originalLanguage: "English",
    pages: 328,
    genre: "Dystopian"
  },
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    price: 10.99,
    editionYear: 2015,
    publicationYear: 1943,
    copiesSold: 200000000,
    originalLanguage: "French",
    pages: 96,
    genre: "Fantasy"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 16.00,
    editionYear: 1993,
    publicationYear: 1988,
    copiesSold: 150000000,
    originalLanguage: "Portuguese",
    pages: 208,
    genre: "Adventure"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 14.99,
    editionYear: 2010,
    publicationYear: 1951,
    copiesSold: 65000000,
    originalLanguage: "English",
    pages: 277,
    genre: "Literary Fiction"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    price: 11.99,
    editionYear: 2007,
    publicationYear: 1813,
    copiesSold: 20000000,
    originalLanguage: "English",
    pages: 432,
    genre: "Romance"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    price: 13.50,
    editionYear: 2001,
    publicationYear: 1937,
    copiesSold: 100000000,
    originalLanguage: "English",
    pages: 310,
    genre: "Fantasy"
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    price: 14.99,
    editionYear: 2003,
    publicationYear: 2003,
    copiesSold: 80000000,
    originalLanguage: "English",
    pages: 454,
    genre: "Thriller"
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    price: 12.99,
    editionYear: 2008,
    publicationYear: 2005,
    copiesSold: 30000000,
    originalLanguage: "Swedish",
    pages: 465,
    genre: "Mystery"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 10.50,
    editionYear: 2004,
    publicationYear: 1925,
    copiesSold: 25000000,
    originalLanguage: "English",
    pages: 180,
    genre: "Classic"
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    price: 13.75,
    editionYear: 2011,
    publicationYear: 1847,
    copiesSold: 15000000,
    originalLanguage: "English",
    pages: 500,
    genre: "Gothic Fiction"
  }
];
  
console.log(books);  // Displays all books
  
// Filter books by genre
let bookfilter = books.filter((pre) => pre.genre === "Dystopian");
console.log(bookfilter);  // Only "1984"

// Filter books by multiple conditions
let booksfilter = books.filter((prem) => prem.pages > 200 && prem.price >= 13.13 && prem.editionYear === 2011);
console.log(booksfilter);  // Only "Jane Eyre"

// ### Explanation and Corrections

// 1. **Issue with `forEach` return value**:
//    - In this block of code:
//      ```javascript
//      const value = carbonylGroups.forEach((val) => {
//        return val; 
//      });
//      console.log(value);
//      ```
//      - The issue here is that `forEach` doesn't return anything, so `value` will always be `undefined`. If you want to transform or filter an array, use `map` or `filter` instead of `forEach`.
     
//      Example of using `map` instead of `forEach`:
//      ```javascript
//      const value = carbonylGroups.map((val) => val);
//      console.log(value); // It will print the array itself.
//      ```

// 2. **Efficiently Filtering Numbers**:
//    - Your filtering of the `num` array using `filter` is correct:
//      ```javascript
//      let nums = num.filter((cal) => {
//        return cal > 4;
//      });
//      console.log(nums);
//      ```
//      - This filters numbers greater than 4 correctly.

// 3. **Using `forEach` after clearing `num`**:
//    - After setting `num = []`, the subsequent `forEach` loop will not run as expected, because `num` is now an empty array:
//      ```javascript
//      num = [];
//      num.forEach((dal) => {
//        if (dal > 4) {
//          nums.push(dal);
//        }
//      });
//      console.log(nums);
//      ```
//      - Since `num` is empty, this loop won't do anything. If you want to reset the `num` array and re-filter, make sure `num` is populated.

// 4. **Filtering Books**:
//    - Your filters for books are working as intended:
//      ```javascript
//      let bookfilter = books.filter((pre) => pre.genre === "Dystopian");
//      console.log(bookfilter);
//      ```
//      - This filters books with the genre `"Dystopian"`.

//    - Your filter for books based on multiple conditions also works:
//      ```javascript
//      let booksfilter = books.filter((prem) => prem.pages > 200 && prem.price >= 13.13 && prem.editionYear === 2011);
//      console.log(booksfilter);
//      ```
//      - This filters books with pages greater than 200, price greater than or equal to 13.13, and edition year equal to 2011.

// ### Improved and Corrected Code:

// ```javascript
// "use strict";

// // Corrected: Use map instead of forEach to return an array
// const carbonylGroups = ["aldehyde", "ketone", "carboxylic acid", "ester", "amide", "anhydride", "acid halide"];
// const value = carbonylGroups.map((val) => val);
// console.log(value);  // ["aldehyde", "ketone", "carboxylic acid", "ester", "amide", "anhydride", "acid halide"]

// // Filtering the num array
// let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 21];
// let nums = num.filter((cal) => {
//   return cal > 4;
// });
// console.log(nums);  // [5, 6, 7, 8, 9, 10, 11, 21]

// // This forEach loop does nothing because num is now empty
// num = [];
// num.forEach((dal) => {
//   if (dal > 4) {
//     nums.push(dal);
//   }
// });
// console.log(nums);  // Still [5, 6, 7, 8, 9, 10, 11, 21]

// // Books array
// const books = [
//   {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     price: 15.99,
//     editionYear: 2006,
//     publicationYear: 1960,
//     copiesSold: 40000000,
//     originalLanguage: "English",
//     pages: 324,
//     genre: "Fiction"
//   },
//   {
//     title: "1984",
//     author: "George Orwell",
//     price: 12.50,
//     editionYear: 2008,
//     publicationYear: 1949,
//     copiesSold: 30000000,
//     originalLanguage: "English",
//     pages: 328,
//     genre: "Dystopian"
//   },
//   {
//     title: "The Little Prince",
//     author: "Antoine de Saint-Exupéry",
//     price: 10.99,
//     editionYear: 2015,
//     publicationYear: 1943,
//     copiesSold: 200000000,
//     originalLanguage: "French",
//     pages: 96,
//     genre: "Fantasy"
//   },
//   {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     price: 16.00,
//     editionYear: 1993,
//     publicationYear: 1988,
//     copiesSold: 150000000,
//     originalLanguage: "Portuguese",
//     pages: 208,
//     genre: "Adventure"
//   },
//   {
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     price: 14.99,
//     editionYear: 2010,
//     publicationYear: 1951,
//     copiesSold: 65000000,
//     originalLanguage: "English",
//     pages: 277,
//     genre: "Literary Fiction"
//   },
//   {
//     title: "Pride and Prejudice",
//     author: "Jane Austen",
//     price: 11.99,
//     editionYear: 2007,
//     publicationYear: 1813,
//     copiesSold: 20000000,
//     originalLanguage: "English",
//     pages: 432,
//     genre: "Romance"
//   },
//   {
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     price: 13.50,
//     editionYear: 2001,
//     publicationYear: 1937,
//     copiesSold: 100000000,
//     originalLanguage: "English",
//     pages: 310,
//     genre: "Fantasy"
//   },
//   {
//     title: "The Da Vinci Code",
//     author: "Dan Brown",
//     price: 14.99,
//     editionYear: 2003,
//     publicationYear: 2003,
//     copiesSold: 80000000,
//     originalLanguage: "English",
//     pages: 454,
//     genre: "Thriller"
//   },
//   {
//     title: "The Girl with the Dragon Tattoo",
//     author: "Stieg Larsson",
//     price: 12.99,
//     editionYear: 2008,
//     publicationYear: 2005,
//     copiesSold: 30000000,
//     originalLanguage: "Swedish",
//     pages: 465,
//     genre: "Mystery"
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     price: 10.50,
//     editionYear: 2004,
//     publicationYear: 1925,
//     copiesSold: 25000000,
//     originalLanguage: "English",
//     pages: 180,
//     genre: "Classic"
//   },
//   {
//     title: "Jane Eyre",
//     author: "Charlotte Brontë",
//     price: 13.75,
//     editionYear: 2011,
//     publicationYear: 1847,
//     copiesSold: 15000000,
//     originalLanguage: "English",
//     pages: 500,
//     genre: "Gothic Fiction"
//   }
// ];
  
// console.log(books);  // Displays all books
  
// // Filter books by genre
// let bookfilter = books.filter((pre) => pre.genre === "Dystopian");
// console.log(bookfilter);  // Only "1984"

// // Filter books by multiple conditions
// let booksfilter = books.filter((prem) => prem.pages > 200 && prem.price >= 13.13 && prem.editionYear === 2011);
// console.log(booksfilter);  // Only "Jane Eyre"
// ```

// ### Summary of Changes:
// - **Use `map` instead of `forEach`** when you need to return an array.
// - **Filtering logic works perfectly** for the `num` array and the `books` array.
