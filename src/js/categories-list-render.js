const categoriesList = document.querySelector('.categories-list-main')

export function categoryListTemplate(books) {
    return books
        .map((book) => { return `<li class='categories-list-item'><a href="">${book.list_name}</a></li>` })
        .join('');
}

export function renderCategoriesList(books) {
    const markup = categoryListTemplate(books);
    categoriesList.insertAdjacentHTML('beforeend', markup);
}