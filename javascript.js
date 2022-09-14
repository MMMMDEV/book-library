// section to produce a arr of the book info
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

// getting information from form
const cardBtn = document.querySelector(".card-btn");
const overlayer = document.querySelector(".overlayer");
const modal = document.querySelector(".modal");
const form = document.querySelector("form");
const input1 = document.querySelectorAll(".txt1"); 
const input2 = document.querySelectorAll(".txt2");
const input3 = document.querySelectorAll(".txt3");
const input4 = document.querySelectorAll(".checkbox");
const formSubmit = document.querySelector(".form-submit");

const Flash = new book("Flash", "Barry Alen", "76", "read");
const Doctor = new book("Doctor", "Ally Best", "192", "not read"); 
addBookToLibrary(Flash.info());
addBookToLibrary(Doctor.info());

formSubmit.addEventListener("click", e => {
    if (input1[0].value !== "" && input2[0].value !== "" && input3[0].value !== "") {
        let otherBook = new book( input1[0].value, input2[0].value, input3[0].value, input4[0].value);
        addBookToLibrary(otherBook.info());
        displayBook();
    }
});

cardBtn.addEventListener("click", e => {
    modal.classList.add("modal-active");
    overlayer.classList.add("active");
})

overlayer.addEventListener("click", e => {
    modal.classList.remove("modal-active");
    overlayer.classList.remove("active");
})




