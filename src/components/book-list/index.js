import Book from '../book';
import PromiseWorker from 'promise-worker';
import idbKeyval from 'idb-keyval';
import style from './style';
import {h, Component} from 'preact';

const BOOK_LIST_URL = 'https://cdn.rawgit.com/gitenberg-dev/Second-Folio/master/Gitenberg%20Book%20List.csv';

export default class BookList extends Component {
  async componentDidMount() {
    let books = await idbKeyval.get(BOOK_LIST_URL);
    if (!books) {
      const BookListWorker = require('worker!../../book-list-worker');
      const promiseWorker = new PromiseWorker(new BookListWorker);
      books = await promiseWorker.postMessage(BOOK_LIST_URL);
    }
    this.setState({books});
  }

  render({}, {books=[]}) {
    return (
      <div class={style.bookList}>
        {books.map(book => (
          <Book bookTitle={book.title}
                author={book.author}
                url={book.url}>
          </Book>
        ))}
      </div>
    );
  }
}
