import './manifest.json';
import './icon.png';
import './styles/read.css';

import idbOrWorker from './lib/idb-or-worker';
import markdownToHtmlWorker from './lib/workers/markdown-to-html-worker';

(async () => {
  const url = decodeURIComponent(location.search.substring(1));
  const bookHtml = await idbOrWorker(url, markdownToHtmlWorker);
  const container = document.querySelector('main');
  container.innerHTML = bookHtml;
})();
