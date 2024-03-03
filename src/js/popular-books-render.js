import { renderCategoriesMain } from "./category-render-function";
import { booksAPI } from './booksAPI'

const booksApi = new booksAPI();
export async function renderPopularBooks(selectedCategory){
if (selectedCategory.textContent === 'All categories' || selectedCategory === 'All categories')  {
    try {
      const popularBooks = await booksApi.getPopularBooks();
      console.log(popularBooks);
      popularBooks.map((item) => {
        
        renderCategoriesMain(item.books)
        return
      })
    } catch (err) {
      console.log('error');
    }
    }
    }