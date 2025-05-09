function init() {
  import("./index.all-books.js");
  import("./index.testimonials-readers.js");
  import("./countdown.js");
  import("./index.new-arrivals-carousel.js");
  import("./index.new-arrivals.js");
  import("./index.authors-carousel.js");
  import("./index.featured-author.partial.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
