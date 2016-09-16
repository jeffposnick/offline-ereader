import idbKeyval from 'idb-keyval';
import parseCsv from 'js-csvparser';
import registerPromiseWorker from 'promise-worker/register';

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

  // Don't await, so as not to block returning the response.
  idbKeyval.set(url, books);

  return books;
});

