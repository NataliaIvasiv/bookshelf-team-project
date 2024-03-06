                      
 export function mainBookTemplate(book){
    const { book_image, title, author, _id } = book;
       
       return `<li class="book-item" data-id="${_id}">
       <div class="book-item-container">
           <div class="book-card-container"> 
            <img class="book-card" src="${book_image}" alt="${title}">
               <p class="book-card-hover-text">QUICK VIEW</p>
           </div>
           <div class="book-details">
               <p class="book-title">${title}</p>
               <p class="book-author">${author}</p>
           </div>
       </div>
  </li>`;
           } 
  
export function mainBooksTemplate(books) {
    const markup = books.map(mainBookTemplate).join('');
    return `<ul class='all-categories-main'>${markup}</ul>`
  }
  
//  export function btnMain(){
//     return `<button class='see-more-btn' id='${item.list_name}'>See more</button>`
//   }