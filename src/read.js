import './manifest.json';
import './icon.png';
import './styles/read.css';

import idbOrWorker from './lib/idb-or-worker';
import markdownToHtmlWorker from './lib/workers/markdown-to-html-worker';
import StateManager from './lib/state-manager';
import {columnGap} from './lib/constants';

const state = new StateManager();
let textElement;

const initialize = () => {
  textElement = document.querySelector('.text');

  state.write('title', 'My Book');
  state.write('currentPage', 1);
  state.write('totalPages', Math.ceil(textElement.scrollWidth / (textElement.clientWidth + columnGap)))

  state.listen('currentPage', onCurrentPageChanged);
};

const nextPage = () => {
  const currentPage = state.read('currentPage');
  const totalPages = state.read('totalPages');

  if (currentPage < totalPages) {
    state.write('currentPage', currentPage + 1);
  }
};

const previousPage = () => {
  const currentPage = state.read('currentPage');

  if (currentPage > 1) {
    state.write('currentPage', currentPage - 1);
  }
};

const clickHandler = event => {
  if (event.clientX >= (window.innerWidth / 2)) {
    nextPage();
  } else {
    previousPage();
  }
};

const onCurrentPageChanged = currentPage => {
  const translateOffset = (currentPage - 1) * (textElement.clientWidth + columnGap);
  textElement.style.transform = `translateX(-${translateOffset}px)`;
};

(async () => {
  const url = decodeURIComponent(location.search.substring(1));
  const bookHtml = await idbOrWorker(url, markdownToHtmlWorker);
  const container = document.querySelector('main');
  const containerHtml = `<div class="container"><div class="text">${bookHtml}</div></div>`;
  container.innerHTML = containerHtml;
  container.addEventListener('click', clickHandler);

  initialize();
})();
