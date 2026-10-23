(() => {
  for (const image of document.querySelectorAll('[data-publication-image]')) {
    const placeholder = image.parentElement.querySelector('.publication-thumbnail__placeholder');
    function update(loaded) {
      image.hidden = !loaded;
      placeholder.hidden = loaded;
    }
    image.addEventListener('load', () => update(true));
    image.addEventListener('error', () => update(false));
    if (image.complete) update(image.naturalWidth > 0);
  }
})();
