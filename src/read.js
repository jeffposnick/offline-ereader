import {h, render} from 'preact';
import './style';

const container = document.querySelector('#preact');
container.removeChild(container.firstElementChild);

let root;
function init() {
  const BookList = require('./components/book-list').default;
  root = render(<BookList/>, container, root);
}
init();

if (module.hot) {
  module.hot.accept('./components/book-list/index.js', () => requestAnimationFrame(() => {
    flushLogs();
    init();
  }));

  // optional: mute HMR/WDS logs
  let log = console.log,
    logs = [];
  console.log = (t, ...args) => {
    if (typeof t === 'string' && t.match(/^\[(HMR|WDS)\]/)) {
      if (t.match(/(up to date|err)/i)) logs.push(t.replace(/^.*?\]\s*/m, ''), ...args);
    }
    else {
      log.call(console, t, ...args);
    }
  };
  let flushLogs = () => console.log(`%c🚀 ${logs.splice(0, logs.length).join(' ')}`, 'color:#888;');
}
