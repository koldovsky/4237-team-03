export default (function initFeaturedAuthor() {
    const prevBtn = document.querySelector(".products-carousel__button--prev");
    const nextBtn = document.querySelector(".products-carousel__button--next");

    const nameEl = document.querySelector(".featured-author__name");
    const genreEl = document.querySelector(".featured-author__genre");
    const descEl = document.querySelector(".featured-author__description");
    const photoEl = document.querySelector(".featured-author__image img");
    const booksContainer = document.querySelector(".featured-author__books");

    if (!prevBtn || !nextBtn || !nameEl || !genreEl || !descEl || !photoEl || !booksContainer) {
        console.warn("Author Switcher: Missing DOM elements.");
        return;
    }

    let currentIndex = 0;
    let authors = [];
    let books = [];

    async function loadData() {
        try {
            const [authorsRes, booksRes] = await Promise.all([
                fetch("api/authors.json"),
                fetch("api/books.json")
            ]);
            authors = await authorsRes.json();
            books = await booksRes.json();
            updateAuthor();
        } catch (err) {
            console.error("Error loading data:", err);
        }
    }

    function updateAuthor() {
        const author = authors[currentIndex];
        nameEl.textContent = author.name;
        genreEl.textContent = author.genre;
        descEl.textContent = author.description;
        photoEl.src = author.photo;
        photoEl.alt = author.name;

        updateBooks(author.name);
    }

    function updateBooks(authorName) {
        booksContainer.innerHTML = "";

        const filtered = books.filter(book =>
            book.name.includes(authorName)
        );

        for (const book of filtered) {
            const bookHTML = `
          <article class="book-card">
            <img src="${book.image}" alt="${book.name}" class="book-card__image" width="250" />
            <h4 class="book-card__title">${book.name}</h4>
            <p class="book-card__price">$${book.price.toFixed(2)} USD</p>
            <p class="book-card__action">
              Buy Now <span class="book-card__arrow">></span>
            </p>
          </article>
        `;
            booksContainer.insertAdjacentHTML("beforeend", bookHTML);
        }
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + authors.length) % authors.length;
        updateAuthor();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % authors.length;
        updateAuthor();
    });

    loadData();
})();
