(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('kataAsal');
    var clear = document.getElementById('clearInput');
    var copy = document.getElementById('copyResult');
    var result = document.getElementById('hasilTerjemah');

    if (clear) {
      clear.addEventListener('click', function () {
        input.value = '';
        input.focus();
        if (result) {
          result.innerHTML = '<div class="empty-result"><span>⌕</span><p>Mulai mengetik untuk melihat hasil terjemahan.</p></div>';
        }
      });
    }

    if (copy) {
      copy.addEventListener('click', function () {
        var text = result ? result.innerText.trim() : '';
        if (!text || text === 'Mulai mengetik untuk melihat hasil terjemahan.') return;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(function () {
            copy.textContent = '✓ Tersalin';
            setTimeout(function () { copy.textContent = '⧉ Salin'; }, 1400);
          });
        }
      });
    }

    document.addEventListener('keydown', function (event) {
      if (event.key === '/' && document.activeElement !== input && document.activeElement.tagName !== 'TEXTAREA') {
        event.preventDefault();
        input.focus();
      }
      if (event.key === 'Escape' && document.activeElement === input && input.value) {
        clear.click();
      }
    });
  });
})();