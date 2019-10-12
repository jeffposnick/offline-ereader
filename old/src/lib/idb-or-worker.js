import PromiseWorker from 'promise-worker';
import idbKeyValue from 'idb-keyval';

export default async (url, Worker) => {
  let value = await idbKeyValue.get(url);
  if (!value) {
    const promiseWorker = new PromiseWorker(new Worker());
    value = await promiseWorker.postMessage(url);
    // Don't await here, so that we can return right away.
    idbKeyValue.set(url, value);
  }
  return value;
};
