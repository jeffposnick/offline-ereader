import PromiseWorker from 'promise-worker';
import idbKeyval from 'idb-keyval';
import style from './style';
import {h, Component} from 'preact';

export default class Read extends Component {
  constructor() {
    super();
    this.state = {
      html: '',
      percentRead: 0,
      totalPages: 0,
      currentPage: 0
    };
  }

  async componentWillMount() {
    const url = decodeURIComponent(location.search.substring(1));
    let html = await idbKeyval.get(url);
    if (!html) {
      const MarkdownToHtmlWorker = require('worker!../../markdown-to-html-worker');
      const promiseWorker = new PromiseWorker(new MarkdownToHtmlWorker);
      html = await promiseWorker.postMessage(url);
    }
    this.setState({html});
  }

  componentDidUpdate({}, previousState) {
    const columnGap = 40;
    const textElement = this.base.firstElementChild;
    const totalPages = Math.ceil(textElement.scrollWidth / (textElement.clientWidth + columnGap));
    let currentPage = this.state.percentRead * totalPages;
    if (currentPage < 1) {
      currentPage = 1;
    }
    const translateOffset = (currentPage - 1) * (textElement.clientWidth + columnGap);

    if (currentPage !== previousState.currentPage ||
        totalPages !== previousState.totalPages ||
        translateOffset !== previousState.translateOffset) {
      this.setState({currentPage, totalPages, translateOffset});
    }
  }

  previousPage() {
    let currentPage = this.state.currentPage - 1;
    if (currentPage < 1) {
      currentPage = 1;
    }
    this.setState({
      currentPage,
      percentRead: currentPage / this.state.totalPages
    });
  }

  nextPage(event) {
    let currentPage = this.state.currentPage + 1;
    if (currentPage > this.state.totalPages) {
      currentPage = this.state.totalPages;
    }
    this.setState({
      currentPage,
      percentRead: currentPage / this.state.totalPages
    });
  }

  render() {
    const textStyle = {
      transform: `translateX(-${this.state.translateOffset}px)`
    };

    return (
      <div class={style.container} onClick={e => this.nextPage(e)}>
        <div class={style.text}
             style={textStyle}
             dangerouslySetInnerHTML={{__html: this.state.html}}/>
      </div>
    );
  }
}
