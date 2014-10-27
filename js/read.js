(function() {
  "use strict";

  var template = document.querySelector('#page-template');
  template.fontFamily = 'sans-serif';
  template.bookUrl = window.location.search.split('=')[1];
  template.showToolbars = true;

  template.addEventListener('template-bound', function() {
    var pageableText = document.querySelector('#text');
    var chaptersMenu = document.querySelector('#chapters-menu');
    template.jumpToChapter = function(e) {
      pageableText.scrollToElement(e.target.templateInstance.model.chapterElement);
      chaptersMenu.toggle();
      template.toggleToolbars();
    };

    var toolbarAnimation = document.querySelector('#toolbar-animation');
    toolbarAnimation.target = [].slice.call(document.querySelectorAll('core-toolbar'));
    template.toggleToolbars = function() {
      toolbarAnimation.direction = template.showToolbars ? 'forward' : 'reverse';
      template.showToolbars = true;
      toolbarAnimation.play();
    };
    template.finishToolbarAnimation = function() {
      template.showToolbars = toolbarAnimation.direction === 'reverse';
    };

    template.handleKeyPress = function(e) {
      switch (e.detail.key) {
        case 'right':
        case 'space':
          pageableText.nextPage();
        break;

        case 'left':
          pageableText.previousPage();
        break;

        case 'esc':
          template.toggleToolbars();
        break;
      }
    };
  });
})();
