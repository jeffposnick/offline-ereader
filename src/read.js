import './manifest.json';
import './icon.png';
import './ic_font_download_black_48px.svg';
import './styles/read.css';

import deserializeUrlParams from './lib/deserialize-url-params';
import idbOrWorker from './lib/idb-or-worker';
import markdownToHtmlWorker from './lib/workers/markdown-to-html-worker';
import StateManager from './lib/state-manager';
import {columnGap, globalStateKey} from './lib/constants';

const bookState = new StateManager(location.href);
const globalState = new StateManager(globalStateKey);

const nextPage = () => {
  const currentPage = bookState.read('currentPage');
  const totalPages = bookState.read('totalPages');

  if (currentPage < totalPages) {
    bookState.write('currentPage', currentPage + 1);
  }
};

const previousPage = () => {
  const currentPage = bookState.read('currentPage');

  if (currentPage > 1) {
    bookState.write('currentPage', currentPage - 1);
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
  globalState.write('font-family', font);
};

const onCurrentPageChanged = currentPage => {
  const textElement = document.querySelector('#text');
  const translateOffset = (currentPage - 1) * (textElement.clientWidth + columnGap);
  document.querySelector('#text').style.transform = `translateX(-${translateOffset}px)`;
  document.querySelector('#currentPage').textContent = currentPage;
};

const onTitleChanged = title => {
  document.querySelector('#title').textContent = title;
  document.title = title;
};

const onStyleChanged = (styleValue, styleName) => {
  const textElement = document.querySelector('#text');
  textElement.style[styleName] = styleValue;
  bookState.write('totalPages', Math.ceil(textElement.scrollWidth / (textElement.clientWidth + columnGap)));
};

const onTotalPagesChanged = (newTotalPages, _, oldTotalPages) => {
  const currentPage = bookState.read('currentPage');
  const percentageRead = currentPage / (oldTotalPages || newTotalPages);
  bookState.write('currentPage', Math.floor(percentageRead * newTotalPages));
  document.querySelector('#totalPages').textContent = newTotalPages;
};

const calculateTotalPages = () => {
  const textElement = document.querySelector('#text');
  bookState.write('totalPages', Math.ceil(textElement.scrollWidth / (textElement.clientWidth + columnGap)));
};

(async () => {
  const urlParams = deserializeUrlParams(location.search);
  const url = urlParams.get('url');

  const bookHtml = await idbOrWorker(url, markdownToHtmlWorker);

  const textElement = document.querySelector('#text');
  textElement.innerHTML = bookHtml;

  document.querySelector('#container').addEventListener('click', clickHandler);
  document.querySelector('#font').addEventListener('change', fontHandler);

  bookState.listen('currentPage', onCurrentPageChanged);
  bookState.listen('title', onTitleChanged);
  bookState.listen('totalPages', onTotalPagesChanged);
  ['font-family'].forEach(styleName => globalState.listen(styleName, onStyleChanged));

  await bookState.bootstrap({
    title: urlParams.get('title'),
    currentPage: 1
  });

  calculateTotalPages();
})();
