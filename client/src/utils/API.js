import axios from "axios";

const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const API_KEY = '&download=epub&key=AIzaSyC8d9hBMhXLvdMYCYWOFgOJC9wuj7cMd9I';

export default {
    search: function (query) {
        return axios.get(baseURL + query + API_KEY);
    },
    getBooks: function () {
        return axios.get('/api/books');
    },
    saveBook: function (bookData) {
        return axios.post('/api/books', bookData);
    },
    deleteBook: function (id) {
        return axios.delete('/api/books/' + id);
    },
};