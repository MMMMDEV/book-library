let myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return "The " + this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
    }   
};

function addBookToLibrary(book) {
    myLibrary.push(book);
};

function displayBook() {
    for (let i = 0; i <= myLibrary.length - 1; i++) {
        console.log(myLibrary[i]);
    }
}



const Flash = new book("Flash", "Barry Alen", "76", "read");
const Doctor = new book("Doctor", "Ally Best", "192", "not read");

addBookToLibrary(Flash.info());
addBookToLibrary(Doctor.info());
displayBook();