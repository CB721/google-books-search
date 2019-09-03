## Google Books Search
* Google Book Search is a search application using React.js.  When the user first views the project, they are presented with two options.  They can search for a book, or they can view the books saved to the bookshelf.

[View Project](https://google-books-search-cb.herokuapp.com)

* When they search, a word suggestion appears above the search bar.  Once they hit 'search', ten books are displayed with the following:

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
1) I want to search for different topics to find new books.
2) I want to be able to save books to view later.

## Future Improvements
1) Implement NYTimes api for current top-selling books
2) Give user ability to create and save books to their own account
3) Create animated character with speech bubble containing word suggestion

## Technologies Used
1) HTML/CSS
2) JavaScript/ES6
3) React.js
4) Node.js
5) Google Books API
6) Datamuse API 