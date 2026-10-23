(() => {
  const root = document.querySelector('[data-publications]');
  if (!root) return;

  const controls = root.querySelector('[data-publication-controls]');
  const buttons = [...controls.querySelectorAll('[data-filter-tag]')];
  const allButton = controls.querySelector('[data-filter-all]');
  const count = controls.querySelector('[data-publication-count]');
  const empty = root.querySelector('[data-publication-empty]');
  const years = [...root.querySelectorAll('[data-publication-year]')];
  const sections = [...root.querySelectorAll('[data-publication-section]')];
  const papers = [...root.querySelectorAll('[data-publication-id]')].map(element => ({
    element,
    tags: new Set((element.dataset.tags || '').split(/\s+/).filter(Boolean)),
  }));
  const selected = new Set();

  function update() {
    let visible = 0;
    for (const paper of papers) {
      paper.element.hidden = ![...selected].every(tag => paper.tags.has(tag));
      if (!paper.element.hidden) visible += 1;
    }
    for (const year of years) {
      year.hidden = !year.querySelector('[data-publication-id]:not([hidden])');
    }
    for (const section of sections) {
      section.hidden = !section.querySelector('[data-publication-id]:not([hidden])');
    }
    for (const button of buttons) {
      button.setAttribute('aria-pressed', String(selected.has(button.dataset.filterTag)));
    }
    allButton.setAttribute('aria-pressed', String(selected.size === 0));
    count.textContent = `${visible} of ${papers.length} publications`;
    empty.hidden = visible !== 0;
  }

  for (const button of buttons) {
    button.addEventListener('click', () => {
      const tag = button.dataset.filterTag;
      if (selected.has(tag)) selected.delete(tag);
      else selected.add(tag);
      update();
    });
  }
  allButton.addEventListener('click', () => {
    selected.clear();
    update();
  });
  root.querySelector('[data-clear-filters]').addEventListener('click', () => {
    selected.clear();
    update();
    allButton.focus();
  });

  update();
  controls.hidden = false;
})();
