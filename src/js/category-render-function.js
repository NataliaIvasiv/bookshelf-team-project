function getBookDetailInfo(selectedBookID){
    const { book_image, title, author } = image;
       
       return `<li class="book-item">
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
           
       