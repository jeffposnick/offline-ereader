import parseCsv from 'js-csvparser';
import registerPromiseWorker from 'promise-worker/register';
import {html, safeHtml} from 'common-tags';

const rawGitURL = (repo, file, branch='master') => {
  const url = new URL(repo);
  return `https://cdn.rawgit.com${url.pathname}/${branch}/${file}`;
};

registerPromiseWorker(async url => {
  const response = await fetch(url);
  const csv = await response.text();
  const parsedCsv = parseCsv(csv);
  const books = parsedCsv.data.map(row => {
    if (row[5]) {
      const matches = row[5].match(/(\d+)$/);
      if (matches) {
        return {
          title: row[0],
          author: row[1],
          url: rawGitURL(row[5], `${matches[1]}.txt`)
        };
      }
    }
  }).filter(book => {
    return book && book.title && book.author && book.url;
  });

  return html`
    ${books.map(book => {
      return safeHtml`
        <a class="book"
           title="${book.title} by ${book.author}"
           href="read.html?url=${encodeURIComponent(book.url)}&title=${encodeURIComponent(book.title)}">
          <div class="title">${book.title}</div>
          <div class="author">${book.author}</div>
        </a>`;
    })}
  `;
});
