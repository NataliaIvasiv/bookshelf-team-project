import axios from "axios";

let selectedCategory;
let selectedBookID;
export class booksAPI{
    constructor() {
        this.BASE_URL = 'https://books-backend.p.goit.global/books';
        
    }

    async getCategoriesList() {
        const url = this.BASE_URL + '/category-list';
        const res = await axios.get(url);
        console.log(res);
        return res.data;
    }

    async getPopularBooks() {
        const url = this.BASE_URL + '/top-books ';
        const res = await axios.get(url);
        return res.data;
    }

    async getSelectedCategory(selectedCategory) {
        const url = this.BASE_URL + `/category?category=${selectedCategory}`;
        const res = await axios.get(url);
        return res.data;
    }

    async getBookDetailedInfo(selectedBookID) {
        const url = this.BASE_URL + `/${selectedBookID}`;
        const res = await axios.get(url);
        return res.data;
    }
}