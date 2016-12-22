import MarkdownIt from 'markdown-it';
import registerPromiseWorker from 'promise-worker/register';

const markdown = new MarkdownIt();

registerPromiseWorker(async url => {
  const response = await fetch(url);
  const text = await response.text();
  return markdown.render(text);
});
