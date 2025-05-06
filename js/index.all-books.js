//Max Skydanchuk
class Book {
  constructor(image, name, price, genre) {
    this.image = image;
    this.name = name;
    this.price = price;
    this.genre = genre;
  }
}

//Створення списка через фетч всіх книг
const list = [];

async function init() {
  const response = await fetch("api/books.json");
  const booksData = await response.json();

  for (const book of booksData) {
    list.push(new Book(book.image, book.name, book.price, book.genre));
  }

  // показати перші 6 книг
  renderBooks();
}

init();

const parent = document.getElementById("all-books_books");
const loadMoreBtn = document.getElementById("all-books__load-more");
const BOOKS_PER_PAGE = 6;
let currentPage = 0;

function renderBooks() {
  const start = currentPage * BOOKS_PER_PAGE;
  const end = start + BOOKS_PER_PAGE;
  const currentBooks = list.slice(start, end);

  currentBooks.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("all-books__book");

    const img = document.createElement("img");
    img.src = book.image;
    img.alt = book.name;

    const name = document.createElement("h4");
    name.textContent = book.name;

    const price = document.createElement("p");
    price.textContent = `$${book.price.toFixed(2)} USD`;

    const button = document.createElement("a");
    button.href = "#";
    button.textContent = "Buy Now";

    bookDiv.appendChild(img);
    bookDiv.appendChild(name);
    bookDiv.appendChild(price);
    bookDiv.appendChild(button);

    parent.appendChild(bookDiv);
  });

  currentPage++;

  // ховаємо кнопку якщо всі книги вже показані
  if (currentPage * BOOKS_PER_PAGE >= list.length) {
    loadMoreBtn.style.display = "none";
  }
}

// обробка натискання на "Load More"
loadMoreBtn.addEventListener("click", () => {
  renderBooks();
});

function initializePriceFilter(container) {
  const slider = container.querySelector(".all-books__price-slider");
  const inputMin = container.querySelector(".all-books__price-input--min");
  const inputMax = container.querySelector(".all-books__price-input--max");

  noUiSlider.create(slider, {
    start: [13, 32.5],
    connect: true,
    step: 0.5,
    range: {
      min: 13,
      max: 32.5,
    },
  });

  slider.noUiSlider.on("update", function (values, handle) {
    const [min, max] = values;
    inputMin.value = min;
    inputMax.value = max;
  });

  inputMin.addEventListener("change", function () {
    slider.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener("change", function () {
    slider.noUiSlider.set([null, this.value]);
  });
}

document
  .getElementById("all-books__filters-button")
  .addEventListener("click", () => {
    const modal = document.getElementById("all-books__filters-modal");
    const modalContent = document.querySelector(".all-books__modal-content");
    const options = document.querySelector(".all-books__options");
    const footer = modalContent.querySelector(".all-books__modal-footer");
    modal.style.display = "block";

    if (modalContent.querySelector(".all-books__options")) {
      return; // якщо вже є опції то просто виходимо
    }

    // якщо нема, тобто при першому кліку, то клонуємо опції
    const optionsClone = options.cloneNode(true);
    optionsClone.style.display = "block";

    // видаляємо старий слайдер з клонованого контейнера і додаємо новий пустий
    const oldSlider = optionsClone.querySelector(".all-books__price-slider");
    if (oldSlider) {
      const newSlider = document.createElement("div");
      newSlider.className = "all-books__price-slider";
      oldSlider.replaceWith(newSlider);
    }

    modalContent.insertBefore(optionsClone, footer);

    // тепер ініціалізуємо новий слайдер всередині модального вікна
    initializePriceFilter(modalContent);
  });

// а це для оригіналу на сторінці ініціалізація
initializePriceFilter(document);

document.getElementById("close-filters-modal").addEventListener("click", () => {
  document.getElementById("all-books__filters-modal").style.display = "none";
});

//End Max
