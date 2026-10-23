(() => {
  for (const image of document.querySelectorAll('[data-publication-image]')) {
    const thumbnail = image.closest('.publication-thumbnail');
    const placeholder = thumbnail.querySelector('.publication-thumbnail__placeholder');
    const link = thumbnail.querySelector('[data-publication-zoom]');
    function update(loaded) {
      link.hidden = !loaded;
      placeholder.hidden = loaded;
    }
    image.addEventListener('load', () => update(true));
    image.addEventListener('error', () => update(false));
    if (image.complete) update(image.naturalWidth > 0);
  }

  const links = document.querySelectorAll('[data-publication-zoom]');
  if (!links.length || !('HTMLDialogElement' in window)) return;

  const dialog = document.createElement('dialog');
  dialog.className = 'publication-image-dialog';
  dialog.setAttribute('aria-label', 'Enlarged publication image');
  dialog.setAttribute('aria-describedby', 'publication-image-caption');

  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'publication-image-dialog__close';
  close.textContent = 'Close';
  close.setAttribute('aria-label', 'Close enlarged image');
  close.autofocus = true;

  const image = document.createElement('img');
  image.className = 'publication-image-dialog__image';

  const caption = document.createElement('p');
  caption.id = 'publication-image-caption';
  caption.className = 'publication-image-dialog__caption';

  dialog.append(close, image, caption);
  document.body.append(dialog);
  let opener;

  for (const link of links) {
    link.addEventListener('click', event => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const thumbnail = link.querySelector('img');
      if (!thumbnail.complete || !thumbnail.naturalWidth) return;
      event.preventDefault();
      opener = link;
      image.src = link.href;
      image.alt = thumbnail.alt;
      caption.textContent = thumbnail.alt;
      dialog.showModal();
      document.documentElement.classList.add('publication-image-open');
    });
  }

  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('publication-image-open');
    image.removeAttribute('src');
    if (opener && opener.isConnected && !opener.hidden) opener.focus({ preventScroll: true });
  });
})();
