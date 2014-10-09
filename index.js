var template = document.querySelector('#app-template');
template.books = [
  {title: 'Of Mice and Men', author: 'John Steinbeck', cover: 'http://img1.imagesbn.com/p/9780140177398_p0_v1_s260x420.JPG'},
  {title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', cover: 'http://img2.imagesbn.com/p/9781435129757_p0_v1_s260x420.JPG'},
  {title: 'Adventures of Huckleberry Finn', author: 'Mark Twain', cover: 'http://img1.imagesbn.com/p/9781593081126_p0_v1_s260x420.JPG'},
  {title: 'Dracula', author: 'Bram Stoker', cover: 'http://img2.imagesbn.com/p/9781435129733_p0_v2_s260x420.JPG'},
  {title: 'Pride and Prejudice', author: 'Jane Austen', cover: 'http://img2.imagesbn.com/p/9781593082017_p0_v4_s260x420.JPG'},
  {title: 'Frankenstein', author: 'Mary Shelly', cover: 'http://img2.imagesbn.com/p/9781593081157_p0_v5_s260x420.JPG'},
  {title: 'A Tale of Two Cities', author: 'Charles Dickens', cover: 'http://img1.imagesbn.com/p/9781593081386_p0_v3_s260x420.JPG'},
  {title: 'Crime and Punishment', author: 'Fyodor Dostoevsk', cover: 'http://img1.imagesbn.com/p/9781435131828_p0_v1_s260x420.JPG'},
  {title: 'The Wonderful Wizard of Oz', author: 'L. Frank Baum', cover: 'http://img1.imagesbn.com/p/9781435139732_p0_v2_s260x420.JPG'},
  {title: 'H.P. Lovecraft: The Complete Fiction', author: 'H. P. Lovecraft', cover: 'http://img2.imagesbn.com/p/9781435122963_p0_v2_s260x420.JPG'},
  {title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', cover: 'http://img2.imagesbn.com/p/9781593081515_p0_v1_s260x420.JPG'},
  {title: 'Alice\'s Adventures in Wonderland and Through the Looking-Glass', author: 'Lewis Carroll', cover: 'http://img1.imagesbn.com/p/9781435142886_p0_v5_s260x420.JPG'},
  {title: 'The Art of War', author: 'Sun Tzu', cover: 'http://img2.imagesbn.com/p/9781599869773_p0_v1_s260x420.jpg'},
  {title: 'Jules Verne: Seven Novels', author: 'Jules Verne', cover: 'http://img1.imagesbn.com/p/9781435122956_p0_v2_s260x420.JPG'},
  {title: 'Moby Dick', author: 'Herman Melville', cover: 'http://img2.imagesbn.com/p/9781593080181_p0_v4_s260x420.JPG'},
];
template.recents = template.books.slice(0,5);

document.addEventListener('template-bound', function() {
  var navicon = document.getElementById('navicon');
  var drawerPanel = document.getElementById('drawerPanel');
  navicon.addEventListener('click', function() {
    drawerPanel.togglePanel();
  });

  template.handleViewListTap = function() {
    document.querySelector('book-list').transition();
  }
});

// TODO: Update max-width for drawer to equal window height (so sidebar auto-hides when not in mobile mode)
