class Book {
    constructor(image, name, price, genre) {
        this.image = image;
        this.name = name;
        this.price = price;
        this.genre = genre;
    }
}

export function runApp() {
    const list = [];
    list.push(new Book("../img/books/ascendant-cover.png", "Ascendant - Michael Kane", 25.00, "Lifestyle"));
    list.push(new Book("../img/books/broken-wings-cover.png", "Broken Wings - Lily Monroe", 22.00, "Lifestyle"));
    list.push(new Book("../img/books/deadly-secrets-cover.png", "Deadly Secrets - Chloe Woods", 22.00, "Lifestyle"));
    list.push(new Book("../img/books/digital-ghosts-cover.png", "Digital Ghosts - Jasper Lane", 26.45, "Lifestyle"));
    list.push(new Book("../img/books/fallen-stars-cover.png", "Fallen Stars - Lily Monroe", 16.50, "Lifestyle"));
    list.push(new Book("../img/books/fatal-promise-cover.png", "Fatal Promise - Chloe Woods", 21.00, "Lifestyle"));
    list.push(new Book("../img/books/hidden-truth-cover.png", "Hidden Truth - Chloe Woods", 23.00, "Lifestyle"));
    list.push(new Book("../img/books/hollow-veil-cover.png", "Hollow Veil - Jasper Lane", 32.50, "Lifestyle"));
    list.push(new Book("../img/books/melody-cover.png", "Melody - Iris West", 35.10, "Lifestyle"));
    list.push(new Book("../img/books/midnight-shadows-cover.png", "Midnight Shadows - Lily Monroe", 20.90, "Lifestyle"));
    list.push(new Book("../img/books/mirage-cover.png", "Mirage - Nathan Cole", 21.00, "Lifestyle"));
    list.push(new Book("../img/books/phantom-cover.png", "Phantom - Liam Hayes", 22.45, "Lifestyle"));
    list.push(new Book("../img/books/rebirth-cover.png", "Rebirth - Damon Cross", 23.50, "Lifestyle"));
    list.push(new Book("../img/books/resonance-cover.png", "Resonance - Emilia Fox", 19.50, "Lifestyle"));
    list.push(new Book("../img/books/shadow-queen-cover.png", "Shadow Queen - Oliver Reid", 21.99, "Lifestyle"));
    list.push(new Book("../img/books/silent-waves-cover.png", "Silent Waves - Noah Black", 23.55, "Lifestyle"));
    list.push(new Book("../img/books/specter-cover.png", "Specter - Naomi Woods", 29.00, "Lifestyle"));
    list.push(new Book("../img/books/starlight-cover.png", "Starlight - Sophie Lark", 32.55, "Lifestyle"));
    list.push(new Book("../img/books/stars-of-andromeda-cover.png", "Stars of Andromeda - Lara Miles", 29.99, "Lifestyle"));
    list.push(new Book("../img/books/stolen-hearts-cover.png", "Stolen Hearts - Chloe Woods", 21.00, "Lifestyle"));
    list.push(new Book("../img/books/the-quantum-prison-cover.png", "The Quantum Prison - Alex Draven", 17.00, "Lifestyle"));
    list.push(new Book("../img/books/the-shadow-cover.png", "The Shadow - Lila Gray", 13.00, "Lifestyle"));
    list.push(new Book("../img/books/the-thief-of-time-cover.png", "The Thief of Time - Amelia Pierce", 18.00, "Lifestyle"));
    list.push(new Book("../img/books/the-wild-hunt-cover.png", "The Wild Hunt - Oliver Reid", 10.00, "Lifestyle"));
    list.push(new Book("../img/books/thorn-of-the-frost-king-cover.png", "Thorn of The Frost King - Edgar Hale", 29.45, "Lifestyle"));
    list.push(new Book("../img/books/tides-cover.png", "Tides - Marina Holt", 25.22, "Lifestyle"));
    list.push(new Book("../img/books/unseen-eyes-cover.png", "Unseen Eyes - Rebecca Cole", 27.00, "Lifestyle"));
    list.push(new Book("../img/books/whispered-secrets-cover.png", "Whispered Secrets - Lily Monroe", 20.00, "Lifestyle"));
    list.push(new Book("../img/books/shattered-dreams-cover.png", "Shattered Dreams - Lily Monroe", 19.99, "Lifestyle"));

    const parent = document.getElementById("all-books_books");

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
    
}
  
