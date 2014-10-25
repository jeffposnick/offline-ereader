(function() {
  "use strict";

  var template = document.querySelector('#page-template');

  template.books = [
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      cover: 'http://www.publicbookshelf.com/images/PridePrejudice423x630.jpg',
      url: 'https://cdn.rawgit.com/GITenberg/Pride-and-Prejudice_1342/master/1342.txt'
    },
    {
      title: 'Adventures of Huckleberry Finn',
      author: 'Mark Twain',
      cover: 'http://www.gutenberg.org/cache/epub/76/pg76.cover.medium.jpg',
      url: 'https://cdn.rawgit.com/GITenberg/Adventures-of-Huckleberry-Finn_19640/master/19640.txt'
    },
    {
      title: 'Alice\'s Adventures in Wonderland',
      author: 'Lewis Carroll',
      cover: 'http://media-cache-cd0.pinimg.com/236x/04/fc/25/04fc25cd5b008f940c6dc2a9b9dd4a75.jpg',
      url: 'https://cdn.rawgit.com/GITenberg/Alice-s-Adventures-in-Wonderland_19033/master/19033-8.txt'
    }
  ];
})();
