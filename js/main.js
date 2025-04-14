class Book {
    constructor(image, name, price, genre) {
        this.image = image;
        this.name = name;
        this.price = price;
        this.genre = genre;
    }
}

//Max Skydanchuk
export function runApp() {

    //Creating list with all books, and genre for later sorting
    const list = [];
    
    list.push(new Book("img/books/michael-kane--ascendant.png", "Ascendant - Michael Kane", 25.00, "Lifestyle"));
    list.push(new Book("img/books/lily-monroe--broken-wings.png", "Broken Wings - Lily Monroe", 22.00, "Lifestyle"));
    list.push(new Book("img/books/chloe-woods--deadly-secrets.png", "Deadly Secrets - Chloe Woods", 22.00, "Lifestyle"));
    list.push(new Book("img/books/jasper-lane--digital-ghosts.png", "Digital Ghosts - Jasper Lane", 26.45, "Lifestyle"));
    list.push(new Book("img/books/lily-monroe--fallen-stars.png", "Fallen Stars - Lily Monroe", 16.50, "Lifestyle"));
    list.push(new Book("img/books/chloe-woods--fatal-promise.png", "Fatal Promise - Chloe Woods", 21.00, "Lifestyle"));
    list.push(new Book("img/books/chloe-woods--hidden-truth.png", "Hidden Truth - Chloe Woods", 23.00, "Lifestyle"));
    list.push(new Book("img/books/jasper-lane--hollow-veil.png", "Hollow Veil - Jasper Lane", 32.50, "Lifestyle"));
    list.push(new Book("img/books/iris-west--melody.png", "Melody - Iris West", 35.10, "Lifestyle"));
    list.push(new Book("img/books/lily-monroe--midnight-shadows.png", "Midnight Shadows - Lily Monroe", 20.90, "Lifestyle"));
    list.push(new Book("img/books/nathan-cole--mirage.png", "Mirage - Nathan Cole", 21.00, "Lifestyle"));
    list.push(new Book("img/books/liam-hayes--phantom.png", "Phantom - Liam Hayes", 22.45, "Lifestyle"));
    list.push(new Book("img/books/damon-cross--rebirth.png", "Rebirth - Damon Cross", 23.50, "Lifestyle"));
    list.push(new Book("img/books/emilia-fox--resonance.png", "Resonance - Emilia Fox", 19.50, "Lifestyle"));
    list.push(new Book("img/books/oliver-reid--shadow-queen.png", "Shadow Queen - Oliver Reid", 21.99, "Lifestyle"));
    list.push(new Book("img/books/noah-black--silent-waves.png", "Silent Waves - Noah Black", 23.55, "Lifestyle"));
    list.push(new Book("img/books/naomi-woods--specter.png", "Specter - Naomi Woods", 29.00, "Lifestyle"));
    list.push(new Book("img/books/sophie-lark--starlight.png", "Starlight - Sophie Lark", 32.55, "Lifestyle"));
    list.push(new Book("img/books/lara-miles--stars-of-andromeda.png", "Stars of Andromeda - Lara Miles", 29.99, "Lifestyle"));
    list.push(new Book("img/books/chloe-woods--stolen-hearts.png", "Stolen Hearts - Chloe Woods", 21.00, "Lifestyle"));
    list.push(new Book("img/books/alex-draven--the-quantum-prison.png", "The Quantum Prison - Alex Draven", 17.00, "Lifestyle"));
    list.push(new Book("img/books/lila-gray--the-shadow.png", "The Shadow - Lila Gray", 13.00, "Lifestyle"));
    list.push(new Book("img/books/amelia-pierce--the-thief-of-time.png", "The Thief of Time - Amelia Pierce", 18.00, "Lifestyle"));
    list.push(new Book("img/books/oliver-reid--the-wild-hunt.png", "The Wild Hunt - Oliver Reid", 10.00, "Lifestyle"));
    list.push(new Book("img/books/edgar-hale--thorn-of-the-frost-king.png", "Thorn of The Frost King - Edgar Hale", 29.45, "Lifestyle"));
    list.push(new Book("img/books/marina-holt--tides.png", "Tides - Marina Holt", 25.22, "Lifestyle"));
    list.push(new Book("img/books/rebecca-cole--unseen-eyes.png", "Unseen Eyes - Rebecca Cole", 27.00, "Lifestyle"));
    list.push(new Book("img/books/lily-monroe--whispered-secrets.png", "Whispered Secrets - Lily Monroe", 20.00, "Lifestyle"));
    list.push(new Book("img/books/lily-monroe--shattered-dreams.png", "Shattered Dreams - Lily Monroe", 19.99, "Lifestyle"));

    const parent = document.getElementById("all-books_books");

    //Adding this books to div with id "all-books_books"
    list.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("all-books__book");

        const img = document.createElement("img");
        img.src = book.image;
        img.alt = book.name;

        const name = document.createElement("h4");
        name.textContent = book.name;

        const price = document.createElement("p");
        price.textContent = `$${book.price.toFixed(2)}USD`;

        const button = document.createElement("a");
        button.href = "#";
        button.textContent = "Buy Now";

        bookDiv.appendChild(img);
        bookDiv.appendChild(name);
        bookDiv.appendChild(price);
        bookDiv.appendChild(button);

        parent.appendChild(bookDiv);
    });


    //noUiSlider
    const slider = document.getElementById("all-books__price-slider");
    const inputMin = document.querySelector(".all-books__price-input--min");
    const inputMax = document.querySelector(".all-books__price-input--max");

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
//End Max
  
