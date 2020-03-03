import axios from "axios";

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
    return axios.get(`/api/books/search/all/${query}`);
  },
  // Get top result from google
  singleGoogleBook: function (search) {
    return axios.get(`'/api/books/search/single/${search}`);
  },
  // Get top books
  getTopBooks: function () {
    return axios.get("/api/books/ny/top");
  },
  getSavedTopBooks: function() {
    return axios.get("/api/tops")
  },
  saveTopBooks: function(data) {
    console.log(data);
    return axios.put("/api/tops/", data);
  }
};