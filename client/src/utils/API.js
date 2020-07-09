import axios from "axios";

export default {
    //get books from the database
    getAllBooks: function() {
        return axios.get("/api/books")
    },
    //save a book to the database
    saveBook: function(id) {
        return axios.post(`/api/books/${id}`)
    },
    //search google books
    searchBooks: function(search) {
        return axios.get(`/search/${search}`)
    },
    //delete all unsaved book
    deleteAllUnsaved: function() {
        return axios.delete("/api/books")
    },
    //delete one book
    deleteBook: function(id) {
        return axios.delete(`/api/books/${id}`)
    }
}