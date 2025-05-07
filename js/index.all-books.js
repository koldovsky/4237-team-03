//Max Skydanchuk
class Book {
  constructor(image, name, price, genre, status) {
    this.image = image;
    this.name = name;
    this.price = price;
    this.genre = genre;
    this.status = status;
  }
}

// створення списка через фетч всіх книг
const list = [];
let filteredList = []; // список книг для фільтрації

let minPrice = 0;
let maxPrice = 0;

async function init() {
  const response = await fetch("api/books.json");
  const booksData = await response.json();

  for (const book of booksData) {
    list.push(
      new Book(book.image, book.name, book.price, book.genre, book.status)
    );
  }

  applyGenreFilter("All");
}

init();

const parent = document.getElementById("all-books_books");
const loadMoreBtn = document.getElementById("all-books__load-more");
const BOOKS_PER_PAGE = 6;
let currentPage = 0;
let activeGenre = "All";

function updateActiveGenreUI() {
  document.querySelectorAll(".all-books__filter-item").forEach((item) => {
    const genre = item.textContent.trim();
    if (genre === activeGenre) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function updatePriceRange() {
  if (filteredList.length === 0) return;

  const prices = filteredList.map((book) => book.price);
  minPrice = Math.min(...prices);
  maxPrice = Math.max(...prices);

  document.querySelectorAll(".all-books__price-slider").forEach((slider) => {
    slider.noUiSlider.updateOptions({
      range: {
        min: minPrice,
        max: maxPrice,
      },
      start: [minPrice, maxPrice],
    });
  });

  document.querySelectorAll(".all-books__price-input--min").forEach((input) => {
    input.value = minPrice.toFixed(2);
  });
  document.querySelectorAll(".all-books__price-input--max").forEach((input) => {
    input.value = maxPrice.toFixed(2);
  });
}

function applyGenreFilter(genre) {
  activeGenre = genre;
  currentPage = 0;

  if (genre === "All") {
    filteredList = [...list];
  } else {
    filteredList = list.filter((book) => book.genre === genre);
  }

  updatePriceRange(); // оновлюємо ціну відповідно до жанру

  updateActiveGenreUI(); //оновлюємо всі активні фільтри
  parent.innerHTML = "";
  currentPage = 0;
  loadMoreBtn.style.display = "block";
  renderBooks();
}

function setupGenreFilters(container) {
  const genreItems = container.querySelectorAll(".all-books__filter-item");

  genreItems.forEach((item) => {
    item.addEventListener("click", () => {
      const genre = item.textContent.trim();
      applyGenreFilter(genre);
    });
  });
}

setupGenreFilters(document); // для головного блоку з фільтрами, бо для блоку в модальному вікні буде інакше

function renderBooks() {
  const min = parseFloat(
    document.querySelector(".all-books__price-input--min").value
  );
  const max = parseFloat(
    document.querySelector(".all-books__price-input--max").value
  );

  const priceFiltered = filteredList.filter(
    (book) => book.price >= min && book.price <= max
  );

  const start = currentPage * BOOKS_PER_PAGE;
  const end = start + BOOKS_PER_PAGE;
  const currentBooks = priceFiltered.slice(start, end);

  currentBooks.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("all-books__book");

    // статус (якщо є)
    if (book.status && book.status !== "-") {
      const statusDiv = document.createElement("div");
      statusDiv.classList.add("all-books__book-status");
      statusDiv.textContent = book.status;
      bookDiv.appendChild(statusDiv);
    }

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

  if (currentPage * BOOKS_PER_PAGE >= priceFiltered.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "block";
  }
}

// обробка натискання на "Load More"
loadMoreBtn.addEventListener("click", () => {
  renderBooks();
});

function onPriceChange(values) {
  const [min, max] = values.map(parseFloat);

  // Якщо значення слайдера не змінені — не показуємо фільтр тег
  if (min === minPrice && max === maxPrice) {
    const existingTag = document.querySelector(".price-filter-tag");
    if (existingTag) existingTag.remove(); // якщо був — видаляємо
  } else {
    const container = document.querySelector(
      ".all-books__container-with-books"
    );
    const existingTag = container.querySelector(".price-filter-tag");
    if (existingTag) existingTag.remove(); // оновити тег, якщо був
    const priceTag = createPriceTagElement(min, max);
    container.insertBefore(priceTag, parent);
  }

  // Перерендерити
  document.querySelector(".all-books__price-input--min").value = min;
  document.querySelector(".all-books__price-input--max").value = max;

  currentPage = 0;
  parent.innerHTML = "";
  renderBooks();
}

function initializePriceFilter(container, isModal = false) {
  const slider = container.querySelector(".all-books__price-slider");
  const inputMin = container.querySelector(".all-books__price-input--min");
  const inputMax = container.querySelector(".all-books__price-input--max");

  noUiSlider.create(slider, {
    start: [10, 35.1],
    connect: true,
    step: 0.25,
    range: {
      min: 10,
      max: 35.1,
    },
  });

  slider.noUiSlider.on("update", (values) => {
    const [min, max] = values.map(parseFloat);
    inputMin.value = min;
    inputMax.value = max;

    if (!isModal) {
      onPriceChange(values);
    } else {
      updateModalApplyButtonState(min, max);
    }
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

    // тепер ініціалізуємо новий слайдер всередині модального вікна та фільтри
    initializePriceFilter(modalContent, true);
    setupGenreFilters(modalContent);

    document.querySelector(".all-books__modal-button-apply").textContent = "Apply filters: 0";

    const modalSliderElement = modalContent.querySelector(
      ".all-books__price-slider"
    );
    const modalSlider = modalSliderElement.noUiSlider;
    if (modalSlider) {
      modalSlider.updateOptions({
        range: {
          min: minPrice,
          max: maxPrice,
        },
        start: [minPrice, maxPrice], 
      });
    }
  });

// а це для оригіналу на сторінці ініціалізація
initializePriceFilter(document);

document.getElementById("close-filters-modal").addEventListener("click", () => {
  document.getElementById("all-books__filters-modal").style.display = "none";
});

function resetPriceFilter() {
  const sliders = document.querySelectorAll(".all-books__price-slider");
  sliders.forEach((slider) => {
    if (slider.noUiSlider) {
      slider.noUiSlider.set([minPrice, maxPrice]);
    }
  });

  // Приховати price-tag
  const existingTag = document.querySelector(".price-filter-tag");
  if (existingTag) existingTag.remove();

  // Перерендерити книги
  currentPage = 0;
  parent.innerHTML = "";
  renderBooks();
}

function createPriceTagElement(min, max) {
  const tagContainer = document.createElement("div");
  tagContainer.className = "price-filter-tag";

  tagContainer.innerHTML = `
    <div class="price-filter-tag-container">
      <span>Price: ${min.toFixed(2)} - ${max.toFixed(2)}</span>
      <button class="price-filter-tag__close" title="Clear filter">×</button>
    </div>
    <a href="#" class="price-filter-tag__clear">Clear all</a>
  `;

  // обробники натискань
  tagContainer
    .querySelector(".price-filter-tag__close")
    .addEventListener("click", resetPriceFilter);
  tagContainer
    .querySelector(".price-filter-tag__clear")
    .addEventListener("click", (e) => {
      e.preventDefault();
      resetPriceFilter();
    });

  return tagContainer;
}

function updateModalApplyButtonState(min, max) {
  const applyBtn = document.querySelector(".all-books__modal-button-apply");
  if (!applyBtn) return;

  const isChanged = min !== minPrice || max !== maxPrice;
  applyBtn.textContent = `Apply filters: ${isChanged ? 1 : 0}`;
}

document
  .querySelector(".all-books__modal-button-apply")
  .addEventListener("click", () => {
    const modal = document.querySelector(".all-books__modal-content");
    const inputMin = modal.querySelector(".all-books__price-input--min");
    const inputMax = modal.querySelector(".all-books__price-input--max");
    const min = parseFloat(inputMin.value);
    const max = parseFloat(inputMax.value);

    onPriceChange([min, max]); // тепер застосовується лише після Apply
    document.getElementById("all-books__filters-modal").style.display = "none";
  });

document
  .querySelector(".all-books__modal-button-clear")
  .addEventListener("click", () => {
    const modal = document.querySelector(".all-books__modal-content");
    const slider = modal.querySelector(".all-books__price-slider");

    if (slider && slider.noUiSlider) {
      slider.noUiSlider.set([minPrice, maxPrice]);
    }

    // також можемо очистити поля вручну
    modal.querySelector(".all-books__price-input--min").value =
      minPrice.toFixed(2);
    modal.querySelector(".all-books__price-input--max").value =
      maxPrice.toFixed(2);
  });

//End Max
