(function() {
  "use strict";

  var template = document.querySelector('#page-template');
  template.fontFamily = 'sans-serif';
  template.bookUrl = window.location.search.split('=')[1];

  template.addEventListener('template-bound', function() {
    var pageableText = document.querySelector('pageable-text');

    template.handleKeyPress = function(e) {
      switch (e.detail.key) {
        case 'right':
        case 'space':
          pageableText.nextPage();
        break;

        case 'left':
          pageableText.previousPage();
        break;
      }
    };
  });
})();
