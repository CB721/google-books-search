import axios from "axios";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";
// change to giphy
const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=oZLjfolRARt1FqSzbHu9yHOboMpJ0CT7&limit=1";

export default {
    // Gets all books
    getBooks: function() {
      return axios.get("/api/books");
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
      return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
      return axios.post("/api/books", bookData);
    },
    // Book search from Google
    googleBook: function(query) {
      return axios.get(URL + query);
    },
    // Giphy search
    // change query to fahrenheit 451
    giphy: function() {
      return axios.get(BASEURL + "fahrenheit 451" + APIKEY);
    }
  };