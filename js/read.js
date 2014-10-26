(function() {
  "use strict";

  var template = document.querySelector('#page-template');
  template.fontFamily = 'sans-serif';
  template.bookUrl = window.location.search.split('=')[1];
})();
