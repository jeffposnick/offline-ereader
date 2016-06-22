'use strict';

(function (t) {
  var serializeUrlParams = function serializeUrlParams(params) {
    return Object.keys(params).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');
  };

  var rawGitURL = function rawGitURL(repo, file) {
    var url = new URL(repo);
    return 'https://cdn.rawgit.com' + url.pathname + '/master/' + file;
  };

  var resized = function resized(url) {
    var id = arguments.length <= 1 || arguments[1] === undefined ? 'fuhb' : arguments[1];
    var width = arguments.length <= 2 || arguments[2] === undefined ? 342 : arguments[2];
    var height = arguments.length <= 3 || arguments[3] === undefined ? 510 : arguments[3];
    var format = arguments.length <= 4 || arguments[4] === undefined ? 'webp' : arguments[4];

    return 'https://' + id + '.lite.imgeng.in/w_' + width + '/h_' + height + '/f_' + format + '/' + url;
  };

  t.sortBooks = function () {
    t.books.sort(function (a, b) {
      return a[t.sortOrder] > b[t.sortOrder] ? 1 : -1;
    });

    if (t.$) {
      t.$.bookRepeat.render();
    }
  };

  t.openSortDialog = function () {
    t.$.sortDialog.open();
  };

  t.closeSortDialog = function () {
    t.$.sortDialog.close();
    t.async(t.sortBooks);
  };

  t.selectBook = function (event) {
    window.location.href = 'read.html?' + serializeUrlParams({
      bookUrl: event.currentTarget.url,
      bookTitle: event.currentTarget.bookTitle
    });
  };

  t.sortOrder = 'title';

  window.fetch('https://cdn.rawgit.com/gitenberg-dev/Second-Folio/master/Gitenberg%20Book%20List.csv').then(function (response) {
    return response.text();
  }).then(function (csv) {
    return csvjson.csv2json(csv);
  }).then(function (json) {
    return json.rows.filter(function (row) {
      return row['Gitenberg URL'];
    });
  }).then(function (rows) {
    t.books = rows.map(function (row) {
      var bookId = row['Gitenberg URL'].match(/(\d+)$/)[1];
      return {
        title: row['Title'],
        author: row['Author'],
        cover: row['RTC Cover?'] === 'YES' ? resized(rawGitURL(row['Gitenberg URL'], 'cover.jpg')) : null,
        url: rawGitURL(row['Gitenberg URL'], bookId + '.txt'),
        lastAccessed: Date.now()
      };
    });
  });
})(document.querySelector('#pageTemplate'));