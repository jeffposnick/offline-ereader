var pageTemplate = document.querySelector("#main-template");

pageTemplate.addEventListener('template-bound', function() {
  pageTemplate.handleViewListTap = function() {
    document.querySelector('book-list').transition();
  }
});
