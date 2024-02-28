import axios from "axios";

export class booksAPI{
    constructor() {
        this.BASE_URL = 'https://books-backend.p.goit.global/books';
        this.API_KEY = '';
    }

    async getCategoriesList() {
        const url = this.BASE_URL + '/category-list';
        const res = await axios.get(url);
        return res.data;
    }

    async getPopularBooks() {
        const url = this.BASE_URL + '/top-books ';
        const res = await axios.get(url);
        return res.data;
    }

    async getSelectedCategory() {
        const url = this.BASE_URL + '/category?category=selectedCategory';
        const res = await axios.get(url);
        return res.data;
    }

    async gerBookDetailedInfo() {
        const url = this.BASE_URL + '/bookId';
        const res = await axios.get(url);
        return res.data;
    }
}