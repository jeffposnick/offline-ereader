'use strict';
(t => {
  var serializeUrlParams = params => {
    return Object.keys(params).map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    }).join('&');
  };

  var rawGitURL = (repo, file) => {
    const url = new URL(repo);
    return `https://cdn.rawgit.com${url.pathname}/master/${file}`;
  };

  var resized = (url, id='fuhb', width=342, height=510, format='webp') => {
    return `https://${id}.lite.imgeng.in/` +
      `w_${width}/h_${height}/f_${format}/${url}`
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
      bookTitle: event.currentTarget.bookTitle
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
