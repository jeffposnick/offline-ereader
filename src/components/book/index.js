import {h, Component} from 'preact';
import style from './style';

export default class Book extends Component {
  render({bookTitle, author, url}) {
    return (
      <a class={style.book}
         title={bookTitle + ' by ' + author}
         href={'read.html?' + encodeURIComponent(url)}>
        <div class={style.title}>{bookTitle}</div>
        <div class={style.author}>{author}</div>
      </a>
    );
  }
}
