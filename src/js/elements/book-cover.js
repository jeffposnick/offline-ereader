Polymer({
  is: 'book-cover',
  properties: {
    author: String,
    color: {
      default: 'yellow',
      type: String
    },
    title: String,
    url: String
  }
});
