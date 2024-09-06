const carbonylGroups = ["aldehyde", "ketone", "carboxylic acid", "ester", "amide", "anhydride", "acid halide"];

const value = carbonylGroups.forEach( (val)=> {
    return val; 
});
console.log(value);

let num =[0,1,2,3,4,5,6,7,8,9,10,11,21]
let nums = num.filter((cal)=>{
    return cal>4;
})
console.log(nums);
num=[];
num.forEach((dal)=>{
    if(dal>4){
        nums.push(dal)
    }
})
console.log(nums);


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
  
console.log(books);
  

let bookfilter = books.filter((pre)=>pre.genre==="Dystopian")

console.log(bookfilter);

let booksfilter = books.filter((prem)=>prem.pages>200&&prem.price>=13.13 &&prem.editionYear===2011)

console.log(booksfilter);