import './style';
import idbOrWorker from 'idb-or-worker.js';

const BOOK_LIST_URL = 'https://cdn.rawgit.com/gitenberg-dev/Second-Folio/master/Gitenberg%20Book%20List.csv';

(async () => {
  const booksHtml = await idbOrWorker(BOOK_LIST_URL, require('worker!./book-list-worker'));
  const container = document.querySelector('main');
  container.innerHTML = booksHtml;
})();
