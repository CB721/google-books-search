import axios from "axios";
require('dotenv').config();
const URL = "https://www.googleapis.com/books/v1/volumes?maxResults=10&orderBy=relevance&q=";
const singleBookURL = "https://www.googleapis.com/books/v1/volumes?maxResults=1&orderBy=relevance&q="
const nyURL = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?num_results=5&api-key=";
const nyKey = "2PXJWyqOLiNJo8C537MxtEGoq84R6kpa";
// const nyKey = process.env.NYTIMES_KEY;

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  // Book search from Google
  googleBook: function (query) {
    return axios.get(URL + query);
  },
  // Get top result from google
  singleGoogleBook: function (search) {
    return axios.get(singleBookURL + search);
  },
  // Get top books
  getTopBooks: function () {
    return axios.get(nyURL + nyKey);
  },
  getSavedTopBooks: function() {
    return axios.get("/api/tops")
  },
  saveTopBooks: function(nyBooks) {
    return axios.post("/api/tops/" + nyBooks);
  }
};