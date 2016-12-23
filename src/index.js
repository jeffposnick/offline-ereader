import './manifest.json';
import './icon.png';
import './styles/index.css';

import bookListWorker from './lib/workers/book-list-worker';
import idbOrWorker from './lib/idb-or-worker';
import {bookListUrl} from './lib/constants';

(async () => {
  const booksHtml = await idbOrWorker(bookListUrl, bookListWorker);
  const container = document.querySelector('main');
  container.innerHTML = booksHtml;
})();
