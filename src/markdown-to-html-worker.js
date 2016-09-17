import idbKeyval from 'idb-keyval';
import MarkdownIt from 'markdown-it';
import registerPromiseWorker from 'promise-worker/register';

registerPromiseWorker(async url => {
  const response = await fetch(url);
  const text = await response.text();
  const markdown = new MarkdownIt();
  const html = markdown.render(text);

  // Don't await, so as not to block returning the response.
  idbKeyval.set(url, html);

  return html;
});
