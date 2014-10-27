(function() {
  "use strict";

  var template = document.querySelector('#page-template');

  function serializeUrlParams(params) {
    return Object.keys(params).map(function(key) {
      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
    }).join('&');
  }

  template.readBook = function(e) {
    var readUrl = 'read.html?' + serializeUrlParams({
      bookUrl: e.target.templateInstance.model.book.url,
      title: e.target.templateInstance.model.book.title
    });

    setTimeout(function() {
      window.location.href = readUrl;
    }, 150);
  };

  template.sortBooks = function() {
    template.books = template.books.sort(function(a, b) {
      if (a[template.sortOrder] > b[template.sortOrder]) {
        return 1;
      }
      if (a[template.sortOrder] < b[template.sortOrder]) {
        return -1;
      }
      return 0;
    });
  };

  template.sortOrder = 'title';
  var observer = new PathObserver(template, 'sortOrder');
  observer.open(function() {
    template.sortBooks();
  });

  template.toggleSortDialog = function() {
    document.querySelector('#sort-dialog').toggle();
  };

  template.toggleAddDialog = function() {
    document.querySelector('#add-dialog').toggle();
  };

  template.books = [
    {
      title: '1Pride and Prejudice',
      author: 'Jane Austen',
      cover: 'http://www.publicbookshelf.com/images/PridePrejudice423x630.jpg',
      url: 'https://cdn.rawgit.com/GITenberg/Pride-and-Prejudice_1342/master/1342.txt',
      lastAccessed: Date.now()
    },
    {
      title: '7Adventures of Huckleberry Finn',
      author: 'Mark Twain',
      cover: 'http://www.gutenberg.org/cache/epub/76/pg76.cover.medium.jpg',
      url: 'https://cdn.rawgit.com/GITenberg/Adventures-of-Huckleberry-Finn_19640/master/19640.txt',
      lastAccessed: Date.now()
    },
    {
      title: '3Alice\'s Adventures in Wonderland',
      author: 'Lewis Carroll',
      cover: 'http://media-cache-cd0.pinimg.com/236x/04/fc/25/04fc25cd5b008f940c6dc2a9b9dd4a75.jpg',
      url: 'https://cdn.rawgit.com/GITenberg/Alice-s-Adventures-in-Wonderland_19033/master/19033-8.txt',
      lastAccessed: Date.now()
    },
    {
      title: '4Pride and Prejudice',
      author: 'Jane Austen',
      cover: 'http://www.publicbookshelf.com/images/PridePrejudice423x630.jpg',
      url: 'https://cdn.rawgit.com/GITenberg/Pride-and-Prejudice_1342/master/1342.txt',
      lastAccessed: Date.now()
    },
    {
      title: '55Adventures of Huckleberry Finn',
      author: 'Mark Twain',
      cover: 'http://www.gutenberg.org/cache/epub/76/pg76.cover.medium.jpg',
      url: 'https://cdn.rawgit.com/GITenberg/Adventures-of-Huckleberry-Finn_19640/master/19640.txt',
      lastAccessed: Date.now()
    },
    {
      title: '6Alice\'s Adventures in Wonderland',
      author: 'Lewis Carroll',
      cover: 'http://media-cache-cd0.pinimg.com/236x/04/fc/25/04fc25cd5b008f940c6dc2a9b9dd4a75.jpg',
      url: 'https://cdn.rawgit.com/GITenberg/Alice-s-Adventures-in-Wonderland_19033/master/19033-8.txt',
      lastAccessed: Date.now()
    }
  ];

  template.toggleRemoveDialog = function(e) {
    template.toBeRemoved = e.target.templateInstance.model;
    document.querySelector('#remove-dialog').toggle();
  };

  template.removeBook = function() {
    template.books.splice(template.toBeRemoved.i, 1);
  };

  template.addBook = function(e) {
    template.books.push({
      title: template.toBeAddedTitle,
      author: template.toBeAddedAuthor,
      cover: template.toBeAddedCover,
      url: template.toBeAddedUrl
    });
  };

  template.sortBooks();
})();
