## Google Books Search
* Google Book Search is a search application using React.js.  When the user first views the page, they are presented with two options.  They can search for a book, or they can view the books saved to the bookshelf.
* The user is also presented with a carousel of the current New York Times best sellers list.

[View Project](https://google-books-search-cb.herokuapp.com)
![app-walkthrough](Walkthrough/google-books3.gif)

* When the users begins to search, a word suggestion appears above the search bar.  Once they hit 'search', ten books are displayed with the following:

    * Title
    * Author
    * Description
    * Book cover
    * Link to the purchase page
    * Page count
    * Add to Bookshelf button

* If they hit the 'Add to Bookshelf' button, that book is saved to the database.  A modal appears with the title and cover of the selected book.
* If they type in a phrase that is not related to any book titles, an error message will display on the page.
* When they go to the saved books, all the books that have been saved are displayed with the same information that they were saved with.  The user has an option to now delete the book.
* If they click the delete button, a modal appears with the title and a gif reference to Fahrenheit 451.

## User Stories
1) "I want to search for different topics to find new books".
2) "I want to be able to save books to view later".

## Future Improvements
1) Give user ability to create and save books to their own account
2) Create animated character with speech bubble containing word suggestion
3) Add ability to locate a local library

## Technologies Used
1) HTML/CSS
2) JavaScript/ES6
3) React.js
4) Node.js
5) [Google Books API](https://developers.google.com/books)
6) [Datamuse API](https://www.datamuse.com/api/)
7) [NYTimes Books API](https://developer.nytimes.com/docs/books-product/1/overview)
8) [React Bootstrap](https://react-bootstrap.netlify.com/)

## Resources
* [Video stock footage](https://www.videezy.com/)

## Authors
* Clint Brodar