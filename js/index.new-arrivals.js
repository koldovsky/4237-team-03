const response = await fatch('api/new-arrivals');
const newArrivals = await response.json();
renderNewArrivals(newArrivals);

function renderNewArrivals(newArrivals) {
  let newArrivalsHTML = "";
  for (const newArrival of newArrivals) {
    newArrivalsHTML += `
        <div class="new-arrivals-carousel__item">
        <a class="book-container__link" href="book-details.html">
          <div class="book-container__image-wrapper">
            <img
              class="book-container__image"
              src="${newArrival.bookImage}"
              alt="Coverage of ${newArrival.bookName}"
            />
          </div>
        </a>
        <p class="book-container__name">${newArrival.bookName}</p>
        <p class="book-container__price">${newArrival.bookPrice}</p>
        <button class="book-container__buy">Buy Now</button>
      </div>
      `;
  }

  const newArrivalsList = document.querySelector(
    ".new-arrivals-carousel_track"
  );
  newArrivalsList.innerHTML = newArrivalsHTML;
}


