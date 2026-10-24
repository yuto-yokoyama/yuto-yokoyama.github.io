(() => {
  const toggle = document.querySelector('.site-nav-toggle');
  const navigation = document.getElementById('site-navigation');
  if (!toggle || !navigation) return;
  const mobile = window.matchMedia('(max-width: 760px)');
  function setOpen(open) {
    navigation.hidden = mobile.matches && !open;
    toggle.setAttribute('aria-expanded', String(mobile.matches && open));
  }
  function sync() {
    const focused = document.activeElement;
    toggle.hidden = !mobile.matches;
    setOpen(false);
    if (mobile.matches && navigation.contains(focused)) toggle.focus();
    if (!mobile.matches && focused === toggle) navigation.querySelector('a')?.focus();
  }
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  function onKeydown(event) {
    if (mobile.matches && event.key === 'Escape') {
      setOpen(false);
      toggle.focus();
    }
  }
  navigation.addEventListener('keydown', onKeydown);
  toggle.addEventListener('keydown', onKeydown);
  mobile.addEventListener('change', sync);
  sync();
})();
