import './manifest.json';
import './icon.png';
import './styles/read.css';

import idbOrWorker from './lib/idb-or-worker';
import markdownToHtmlWorker from './lib/workers/markdown-to-html-worker';

let textElement;
let totalPages;

const setTranslateOffset = offset => {
  textElement.style.transform = `translateX(-${offset}px)`;
};

const updateState = () => {
  totalPages = Math.ceil(textElement.scrollWidth / (textElement.clientWidth + 40));
  console.log(totalPages);
};

(async () => {
  const url = decodeURIComponent(location.search.substring(1));
  const bookHtml = await idbOrWorker(url, markdownToHtmlWorker);
  const container = document.querySelector('main');
  const containerHtml = `<div class="container"><div class="text">${bookHtml}</div></div>`;
  container.innerHTML = containerHtml;
  textElement = document.querySelector('.text');
  updateState();
})();
