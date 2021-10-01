/* const promise1 = new Promise((resolve, reject) =>{
    resolve("Veriler Alındı.") 
     reject("Bağlantı Hatası") 
});

 console.log(promise1); 

promise1
    .then(value =>{
        console.log(value);
    }).catch(error =>{
        console.log(error);
    }) */

const books = [
  { name: "Kitap1", author: "Yazar1" },
  { name: "Kitap2", author: "Yazar2" },
  { name: "Kitap3", author: "Yazar3" },
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.name);
  });
};

const addBook = (newBook) => {
  const promise1 = new Promise((resolve, reject) => {
    books.push(newBook);
    resolve(books);
  });
  return promise1;
};

addBook({ name: "Kitap5", author: "Yazar 10" })
  .then(() => {
    console.log("Yeni Liste");
    listBooks();
  })
  .catch((error) => {
    console.log(error);
  });
