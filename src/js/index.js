'use strict';
((t) => {
  var serializeUrlParams = params => {
    return Object.keys(params).map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    }).join('&');
  };

  var rawGitURL = (repo, file) => {
    const url = new URL(repo);
    return `https://cdn.rawgit.com${url.pathname}/master/${file}`;
  };

  var resized = url => {
    return 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?' + serializeUrlParams({
      url: url,
      container: 'focus',
      refresh: 365 * 24 * 60 * 60,
      resize_w: 342,
      resize_h: 510
    });
  };

  t.sortBooks = () => {
    t.books.sort((a, b) => {
      return a[t.sortOrder] > b[t.sortOrder] ? 1 : -1;
    });

    if (t.$) {
      t.$.bookRepeat.render();
    }
  };

  t.openSortDialog = () => {
    t.$.sortDialog.open();
  };

  t.closeSortDialog = () => {
    t.$.sortDialog.close();
    t.async(t.sortBooks);
  };

  t.selectBook = event => {
    window.location.href = 'read.html?' + serializeUrlParams({
      bookUrl: event.currentTarget.url,
      title: event.currentTarget.title
    });
  };

  t.sortOrder = 'title';

  window.fetch('https://cdn.rawgit.com/gitenberg-dev/Second-Folio/master/Gitenberg%20Book%20List.csv').then(response => {
    return response.text();
  }).then(csv => {
    return csvjson.csv2json(csv);
  }).then(json => {
    return json.rows.filter(row => {
      return row['Gitenberg URL'];
    });
  }).then(rows => {
    t.books = rows.map(row => {
      const bookId = row['Gitenberg URL'].match(/(\d+)$/)[1];
      return {
        title: row['Title'],
        author: row['Author'],
        cover: (row['RTC Cover?'] === 'YES' ? resized(rawGitURL(row['Gitenberg URL'], 'cover.jpg')) : null),
        url: rawGitURL(row['Gitenberg URL'], `${bookId}.txt`),
        lastAccessed: Date.now()
      };
    });
  });
})(document.querySelector('#pageTemplate'));

/*
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
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      cover: 'http://www.publicbookshelf.com/images/PridePrejudice423x630.jpg',
      url: 'https://cdn.rawgit.com/GITenberg/Pride-and-Prejudice_1342/master/1342.txt',
      lastAccessed: Date.now()
    },
    {
      title: 'Adventures of Huckleberry Finn',
      author: 'Mark Twain',
      cover: 'http://www.gutenberg.org/cache/epub/76/pg76.cover.medium.jpg',
      url: 'https://cdn.rawgit.com/GITenberg/Adventures-of-Huckleberry-Finn_76/master/76.txt',
      lastAccessed: Date.now()
    },
    {
      title: 'Alice\'s Adventures in Wonderland',
      author: 'Lewis Carroll',
      cover: 'http://media-cache-cd0.pinimg.com/236x/04/fc/25/04fc25cd5b008f940c6dc2a9b9dd4a75.jpg',
      url: 'https://cdn.rawgit.com/GITenberg/Alice-s-Adventures-in-Wonderland_11/master/11.txt',
      lastAccessed: Date.now()
    },
    {
      title: 'Frankenstein',
      author: 'Mary Wollstonecraft Shelley',
      cover: 'https://c1.staticflickr.com/3/2705/4533219490_b8e67307d9_z.jpg',
      url: 'https://cdn.rawgit.com/GITenberg/Frankenstein_84/master/84.txt',
      lastAccessed: Date.now()
    },
    {
      title: 'Moby Dick',
      author: 'Herman Melville',
      cover: 'https://c2.staticflickr.com/4/3110/2847467731_22450764ba_z.jpg',
      url: 'https://cdn.rawgit.com/GITenberg/Moby-Dick--Or-The-Whale_2701/master/2701.txt',
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
*/
