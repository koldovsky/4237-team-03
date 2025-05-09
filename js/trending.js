function initTrendingClock() {
  const clock = document.querySelector('.trending__clock');
  if (!clock) return;

  function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    clock.textContent = timeString;
  }

  updateClock(); // одразу оновити
  setInterval(updateClock, 1000); // оновлювати щосекунди
}

// Якщо HTMX вже завантажив секцію
initTrendingClock();

// Якщо секція підвантажується через HTMX
document.body.addEventListener('htmx:afterSwap', function (event) {
  if (
    event.target &&
    event.target.querySelector &&
    event.target.querySelector('.trending__clock')
  ) {
    initTrendingClock();
  }
});

function initTrendingQuoteRotator() {
  const quotes = [
    "“Reading is essential for those who seek to rise above the ordinary.”",
    "“A reader lives a thousand lives before he dies.”",
    "“Books are a uniquely portable magic.”",
    "“So many books, so little time.”"
  ];

  const quoteElement = document.getElementById('trending-quote');
  if (!quoteElement) return;

  let index = 0;

  setInterval(() => {
    index = (index + 1) % quotes.length;
    quoteElement.style.opacity = '0';
    setTimeout(() => {
      quoteElement.textContent = quotes[index];
      quoteElement.style.opacity = '1';
    }, 300);
  }, 4000);
}

// При першому завантаженні
initTrendingQuoteRotator();

// Для HTMX
document.body.addEventListener('htmx:afterSwap', function (event) {
  if (event.target.querySelector && event.target.querySelector('#trending-quote')) {
    initTrendingQuoteRotator();
  }
});