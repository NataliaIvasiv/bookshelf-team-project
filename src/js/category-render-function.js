function getBookDetailInfo(selectedBookID){
    const { book_image, title, author } = image;
       
       return `<li class="book-item">
                   <img class="book-card" src="${book_image}" alt="${title}">
               <div class="book-details">
                    <p class="book-title">${title}</p>
                    <p class="book-author">${author}</p>
               </div>
           </li>`;
           } 
           
       