// section to produce a arr of the book info
let myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;  
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
const cardContent = document.querySelector(".card-content");
const cardBtn = document.querySelector(".card-btn");
const overlayer = document.querySelector(".overlayer");
const modal = document.querySelector(".modal");
const form = document.querySelector("form");
const input1 = document.querySelectorAll(".txt1"); 
const input2 = document.querySelectorAll(".txt2");
const input3 = document.querySelectorAll(".txt3");
const input4 = document.querySelectorAll(".checkbox");
const formSubmit = document.querySelector(".form-submit");
let card;
let removeBtn;

function createCard() {
    card = document.createElement("div");
    card.classList.add("card");

    const cardTop = document.createElement("div");
    cardTop.classList.add("card-top");

    const titleTxt = document.createElement("p");
    titleTxt.classList.add("title-txt");

    const authorTxt = document.createElement("p");
    authorTxt.classList.add("author-txt");

    const pagesNum = document.createElement("p");
    pagesNum.classList.add("pages-num");

    const readToggle = document.createElement("input");
    readToggle.classList.add("read-toggle");
    readToggle.type = "checkbox";

    removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");

    const cardBottom = document.createElement("div");
    cardBottom.classList.add("card-bottom");

    card.insertAdjacentElement("beforeend", cardTop);
    cardTop.insertAdjacentElement("beforeend", titleTxt);
    cardTop.insertAdjacentElement("beforeend", authorTxt);
    cardTop.insertAdjacentElement("beforeend", pagesNum);
    card.insertAdjacentElement("beforeend", cardBottom);
    cardBottom.insertAdjacentElement("beforeend", readToggle);
    cardBottom.insertAdjacentElement("beforeend", removeBtn);
    cardContent.insertAdjacentElement("beforeend", card);

    titleTxt.textContent = input1[0].value;
    authorTxt.textContent = input2[0].value;
    pagesNum.textContent = input3[0].value;
    removeBtn.textContent = "Delete";
    if (input4[0].checked == true) {
        readToggle.checked = true;
    } else {
        readToggle.checked = false;
    }
}

function createBook() {
    if (input1[0].value !== "" && input2[0].value !== "" && input3[0].value !== "") {
        let otherBook = new book( input1[0].value, input2[0].value, input3[0].value, input4[0].value);
        createCard();
        modal.classList.remove("modal-active");
        overlayer.classList.remove("active");
        input1[0].value = "";
        input2[0].value = "";
        input3[0].value = "";
        input4[0].checked = false;
    }
}

function removeCard() {
    card.remove();
}

form.addEventListener("submit", e => {
    e.preventDefault();
    createBook();
});

cardBtn.addEventListener("click", e => {
    modal.classList.add("modal-active");
    overlayer.classList.add("active");
    console.log(myLibrary);
})

overlayer.addEventListener("click", e => {
    modal.classList.remove("modal-active");
    overlayer.classList.remove("active");
})

removeBtn.addEventListener("click", e => {
    removeCard();
});


