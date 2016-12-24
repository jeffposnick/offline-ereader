import './manifest.json';
import './icon.png';
import './ic_font_download_black_48px.svg';
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

const fontHandler = event => {
  const font = event.target.selectedOptions[0].textContent;
  state.write('font-family', font);
};

const onCurrentPageChanged = currentPage => {
  const textElement = document.querySelector('#text');
  const translateOffset = (currentPage - 1) * (textElement.clientWidth + columnGap);
  document.querySelector('#text').style.transform = `translateX(-${translateOffset}px)`;
};

const onTitleChanged = title => {
  document.querySelector('#title').textContent = title;
};

const onStyleChanged = (styleValue, styleName) => {
  const textElement = document.querySelector('#text');
  textElement.style[styleName] = styleValue;
  state.write('totalPages', Math.ceil(textElement.scrollWidth / (textElement.clientWidth + columnGap)));
};

const onTotalPagesChanged = (newTotalPages, _, oldTotalPages) => {
  const currentPage = state.read('currentPage');
  const percentageRead = currentPage / (oldTotalPages || newTotalPages);
  state.write('currentPage', percentageRead * newTotalPages);
};

const calculateTotalPages = () => {
  const textElement = document.querySelector('#text');
  state.write('totalPages', Math.ceil(textElement.scrollWidth / (textElement.clientWidth + columnGap)));
};

(async () => {
  const urlParams = deserializeUrlParams(location.search);
  const url = urlParams.get('url');

  const bookHtml = await idbOrWorker(url, markdownToHtmlWorker);

  const textElement = document.querySelector('#text');
  textElement.innerHTML = bookHtml;

  document.querySelector('#container').addEventListener('click', clickHandler);
  document.querySelector('#font').addEventListener('change', fontHandler);

  state.listen('currentPage', onCurrentPageChanged);
  state.listen('title', onTitleChanged);
  state.listen('totalPages', onTotalPagesChanged);
  ['font-family', 'line-height'].forEach(styleName => state.listen(styleName, onStyleChanged));

  state.write('title', urlParams.get('title'));
  state.write('currentPage', 1);

  calculateTotalPages();
})();
