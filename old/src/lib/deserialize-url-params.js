export default search => {
  return new Map(search.substring(1).split('&').map(function(keyValuePair) {
    const splits = keyValuePair.split('=');
    const key = decodeURIComponent(splits[0]);
    const value = decodeURIComponent(splits[1]);

    return [key, value];
  }));
};
