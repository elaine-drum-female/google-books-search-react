import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "&key=AIzaSyA32bcdGk0rknZeu2ov-w_qGy1l0cvsPLk";

export default {
  // Get all books
  googleBook: function(query) {
    return axios.get(BASEURL + query);
  },

  // Save book to database
  saveBook: function(book) {
    return axios.post('/api/product/googlebook', book);
  },

  //Retrieve all books
  retrieveAllBooks: function () {
    return axios.get('api/product/googlebooks');
  },

   //Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/product/googlebooks/" + id);
  }
};
