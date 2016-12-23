import './manifest.json';
import './icon.png';
import './styles/read.css';

import idbOrWorker from './lib/idb-or-worker';
import markdownToHtmlWorker from './lib/workers/markdown-to-html-worker';

const columnGap = 40;

let currentPage;
let textElement;
let totalPages;

const nextPage = () => {
  if (currentPage < totalPages) {
    currentPage += 1;
  }
  flipToCurrentPage();
};

const previousPage = () => {
  if (currentPage > 1) {
    currentPage -= 1;
  }
  flipToCurrentPage();
};

const clickHandler = event => {
  if (event.clientX >= (window.innerWidth / 2)) {
    nextPage();
  } else {
    previousPage();
  }
};

const setupListeners = () => {
  textElement = document.querySelector('.text');
  textElement.addEventListener('click', clickHandler);
};

const updateState = () => {
  currentPage = 1;
  totalPages = Math.ceil(textElement.scrollWidth / (textElement.clientWidth + columnGap));
};

const flipToCurrentPage = () => {
  const translateOffset = (currentPage - 1) * (textElement.clientWidth + columnGap);
  textElement.style.transform = `translateX(-${translateOffset}px)`;
};

(async () => {
  const url = decodeURIComponent(location.search.substring(1));
  const bookHtml = await idbOrWorker(url, markdownToHtmlWorker);
  const container = document.querySelector('main');
  const containerHtml = `<div class="container"><div class="text">${bookHtml}</div></div>`;
  container.innerHTML = containerHtml;

  setupListeners();
  updateState();
})();
