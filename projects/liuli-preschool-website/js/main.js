// Լի ու Լի Մանկապարտեզ — shared site behaviour: mobile nav + language toggle

(function () {
  var STORAGE_KEY = 'liuli-lang';

  function setLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('.lang-toggle span').forEach(function (el) {
      el.classList.toggle('active', el.dataset.setlang === lang);
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode, ignore */ }
  }

  function initLangToggle() {
    var saved = 'hy';
    try { saved = localStorage.getItem(STORAGE_KEY) || 'hy'; } catch (e) { /* ignore */ }
    setLang(saved);

    document.querySelectorAll('.lang-toggle').forEach(function (toggle) {
      toggle.addEventListener('click', function (e) {
        var target = e.target.closest('[data-setlang]');
        if (!target) return;
        setLang(target.dataset.setlang);
      });
    });
  }

  function initNavToggle() {
    var btn = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.main-nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 900) {
          nav.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLangToggle();
    initNavToggle();
  });
})();
