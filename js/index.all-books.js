//Max Skydanchuk
class Book {
  constructor(image, name, price, genre) {
    this.image = image;
    this.name = name;
    this.price = price;
    this.genre = genre;
  }
}

//Creating list with all books, and genre for later sorting
const list = [];

list.push(
  new Book(
    "img/books/michael-kane--ascendant.png",
    "Ascendant - Michael Kane",
    25.0,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/lily-monroe--broken-wings.png",
    "Broken Wings - Lily Monroe",
    22.0,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/chloe-woods--deadly-secrets.png",
    "Deadly Secrets - Chloe Woods",
    22.0,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/jasper-lane--digital-ghosts.png",
    "Digital Ghosts - Jasper Lane",
    26.45,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/lily-monroe--fallen-stars.png",
    "Fallen Stars - Lily Monroe",
    16.5,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/chloe-woods--fatal-promise.png",
    "Fatal Promise - Chloe Woods",
    21.0,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/chloe-woods--hidden-truth.png",
    "Hidden Truth - Chloe Woods",
    23.0,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/jasper-lane--hollow-veil.png",
    "Hollow Veil - Jasper Lane",
    32.5,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/iris-west--melody.png",
    "Melody - Iris West",
    35.1,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/lily-monroe--midnight-shadows.png",
    "Midnight Shadows - Lily Monroe",
    20.9,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/nathan-cole--mirage.png",
    "Mirage - Nathan Cole",
    21.0,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/liam-hayes--phantom.png",
    "Phantom - Liam Hayes",
    22.45,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/damon-cross--rebirth.png",
    "Rebirth - Damon Cross",
    23.5,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/emilia-fox--resonance.png",
    "Resonance - Emilia Fox",
    19.5,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/oliver-reid--shadow-queen.png",
    "Shadow Queen - Oliver Reid",
    21.99,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/noah-black--silent-waves.png",
    "Silent Waves - Noah Black",
    23.55,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/naomi-woods--specter.png",
    "Specter - Naomi Woods",
    29.0,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/sophie-lark--starlight.png",
    "Starlight - Sophie Lark",
    32.55,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/lara-miles--stars-of-andromeda.png",
    "Stars of Andromeda - Lara Miles",
    29.99,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/chloe-woods--stolen-hearts.png",
    "Stolen Hearts - Chloe Woods",
    21.0,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/alex-draven--the-quantum-prison.png",
    "The Quantum Prison - Alex Draven",
    17.0,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/lila-gray--the-shadow.png",
    "The Shadow - Lila Gray",
    13.0,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/amelia-pierce--the-thief-of-time.png",
    "The Thief of Time - Amelia Pierce",
    18.0,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/oliver-reid--the-wild-hunt.png",
    "The Wild Hunt - Oliver Reid",
    10.0,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/edgar-hale--thorn-of-the-frost-king.png",
    "Thorn of The Frost King - Edgar Hale",
    29.45,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/marina-holt--tides.png",
    "Tides - Marina Holt",
    25.22,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/rebecca-cole--unseen-eyes.png",
    "Unseen Eyes - Rebecca Cole",
    27.0,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/lily-monroe--whispered-secrets.png",
    "Whispered Secrets - Lily Monroe",
    20.0,
    "Lifestyle"
  )
);
list.push(
  new Book(
    "img/books/lily-monroe--shattered-dreams.png",
    "Shattered Dreams - Lily Monroe",
    19.99,
    "Lifestyle"
  )
);

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

// показати перші 6 книг
renderBooks();

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
