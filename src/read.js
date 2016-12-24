import './manifest.json';
import './icon.png';
import './styles/read.css';

import deserializeUrlParams from './lib/deserialize-url-params';
import idbOrWorker from './lib/idb-or-worker';
import markdownToHtmlWorker from './lib/workers/markdown-to-html-worker';
import StateManager from './lib/state-manager';
import {columnGap} from './lib/constants';

const state = new StateManager();

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
  const textElement = document.querySelector('.text');
  const translateOffset = (currentPage - 1) * (textElement.clientWidth + columnGap);
  textElement.style.transform = `translateX(-${translateOffset}px)`;
};

const onTitleChanged = title => {
  document.querySelector('#title').textContent = title;
};

const onStyleChanged = (styleValue, styleName) => {
  const textElement = document.querySelector('.text');
  textElement.style[styleName] = styleValue;
};

(async () => {
  const urlParams = deserializeUrlParams(location.search);
  const url = urlParams.get('url');

  const bookHtml = await idbOrWorker(url, markdownToHtmlWorker);

  const container = document.querySelector('main');
  const containerHtml = `<div class="container">
    <div class="text">${bookHtml}</div>
  </div>`;
  container.innerHTML = containerHtml;
  container.addEventListener('click', clickHandler);

  state.listen('currentPage', onCurrentPageChanged);
  state.listen('title', onTitleChanged);
  ['font-family', 'line-height'].forEach(styleName => state.listen(styleName, onStyleChanged));

  state.write('title', urlParams.get('title'));
  state.write('currentPage', 1);

  const textElement = document.querySelector('.text');
  state.write('totalPages', Math.ceil(textElement.scrollWidth / (textElement.clientWidth + columnGap)))
})();
