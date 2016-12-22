import './manifest.json';
import './icon.png';
import './styles/index.css';

import bookListWorker from './lib/workers/book-list-worker';
import idbOrWorker from './lib/idb-or-worker';

const BOOK_LIST_URL = 'https://cdn.rawgit.com/gitenberg-dev/Second-Folio/master/Gitenberg%20Book%20List.csv';

(async () => {
  const booksHtml = await idbOrWorker(BOOK_LIST_URL, bookListWorker);
  const container = document.querySelector('main');
  container.innerHTML = booksHtml;
})();
