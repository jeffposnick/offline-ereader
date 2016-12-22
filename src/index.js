require('./manifest.json');
require('./assets/images/icon.png');
require('./styles/index.css');

const idbOrWorker = require('./lib/idb-or-worker');

const BOOK_LIST_URL = 'https://cdn.rawgit.com/gitenberg-dev/Second-Folio/master/Gitenberg%20Book%20List.csv';

(async () => {
  const booksHtml = await idbOrWorker(BOOK_LIST_URL, require('./lib/workers/book-list-worker'));
  const container = document.querySelector('main');
  container.innerHTML = booksHtml;
})();
