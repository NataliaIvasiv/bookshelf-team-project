

function generatedMarkupMain(hit){
    const markup = image.hits
       .map(image) => {
       return `<li class="gallery-item">
               <a href="${hit.webformatURL}">
                   <img class="gallery-image" src="${hit.webformatURL}" alt="${hit.tags}">
               </a>
               <div class="image-details">
                       <p><b class="image-text-title">Title: </b>${hit.list_name}</p>
                       <p><b class="image-text-author">Author: </b>${hit.author}</p>
               </div>
           </li>`;
           } 
           
       }