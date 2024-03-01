const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

const itemsPerPage = 10;

function getPageItems(pageNumber) {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return shoppingList.slice(startIndex, endIndex);
}

function renderPageItems(items) {
  const shoppingListContainer = document.getElementById('shopping-list');
  pageNumber.innerHTML = '';
  
  currentPageItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;
        shoppingListContainer.appendChild(listItem);
    });
}

function renderPaginationButtons() {
  const totalPages = Math.ceil(shoppingList.length / itemsPerPage);
 }

function goToPage(pageNumber) {
  const pageItems = getPageItems(pageNumber);
  renderPageItems(pageItems);
}

goToPage(1);

nextButton.addEventListener('click', () => {
  currentPage++;
  goToPage(currentPage);
});

prevButton.addEventListener('click', () => {
  currentPage--;
  goToPage(currentPage);
});