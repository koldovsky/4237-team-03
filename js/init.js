const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', async () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) {
    const module = await import('./main.js');
    if (module.runApp) {
      module.runApp(); 
    }
  }
});
