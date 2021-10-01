/* const func1 = () => {
    console.log("1. çalıştı");
    func2();
}

const func2 = () => {
    console.log("2. çalıştı");
    func3()
}

const func3 = () => {
    console.log("3. çalıştı.");
}

func1();
 */

/* let x = 5;

console.log("1. gelen veri:", x);

setTimeout(() => {
    x=x+5;
}, 5000);
console.log("2. gelen veri:",x);

x=x+5;
console.log("3. gelen veri:",x); */


const books = [
    {name: "Kitap 1", author: "Yazar 1"},
    {name: "Kitap 2", author: "Yazar 2"},
    {name: "Kitap 3", author: "Yazar 3"}
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
};

const addBook = (newBook, callback) => {
    books.push(newBook);
    callback();
}

addBook({name:"kitap 4", author:"Yazar 4"}, listBooks);
