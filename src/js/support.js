import { refs } from './refs'

import support1 from '../img/support/support-img1@1x.png';
import support2 from '../img/support/support-img2@1x.png';
import support3 from '../img/support/support-img3@1x.png';
import support4 from '../img/support/support-img4@1x.png';
import support5 from '../img/support/support-img5@1x.png';
import support6 from '../img/support/support-img6@1x.png';
import support7 from '../img/support/support-img7@1x.png';
import support8 from '../img/support/support-img8@1x.png';
import support9 from '../img/support/support-img9@1x.png';
import support1_2x from '../img/support/support-img1@2x.png';
import support2_2x from '../img/support/support-img2@2x.png';
import support3_2x from '../img/support/support-img3@2x.png';
import support4_2x from '../img/support/support-img4@2x.png';
import support5_2x from '../img/support/support-img5@2x.png';
import support6_2x from '../img/support/support-img6@2x.png';
import support7_2x from '../img/support/support-img7@2x.png';
import support8_2x from '../img/support/support-img8@2x.png';
import support9_2x from '../img/support/support-img9@2x.png';

const supportArray = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: (support1),
    img2: (support1_2x),
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: (support2),
    img2: (support2_2x),
  },
    {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: (support3),
    img2: (support3_2x),
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: (support4),
    img2: (support4_2x),
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: (support5),
    img2: (support5_2x),
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: (support6),
    img2: (support6_2x),
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: (support7),
    img2: (support7_2x),
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: (support8),
    img2: (support8_2x),
  }, 
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: (support9),
    img2: (support9_2x),
  },
];

// export const supportArray = [
//   {
//     title: 'Save the Children',
//     url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
//     img: ('./img/support/support-img1@1x.png'),
//     img2: ('./img/support/support-img1@2x.png'),
//   },
//   {
//     title: 'Project HOPE',
//     url: 'https://www.projecthope.org/country/ukraine/',
//     img: ('./img/support/support-img2@1x.png'),
//     img2: ('./img/support/support-img2@2x.png'),
//   },
//     {
//     title: 'International Medical Corps',
//     url: 'https://internationalmedicalcorps.org/country/ukraine/',
//     img: ('./img/support/support-img3@1x.png'),
//     img2: ('./img/support/support-img3@2x.png'),
//   },
//   {
//     title: 'RAZOM',
//     url: 'https://www.razomforukraine.org/',
//     img: ('./img/support/support-img4@1x.png'),
//     img2: ('./img/support/support-img4@2x.png'),
//   },
//   {
//     title: 'Action against hunger',
//     url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
//     img: ('./img/support/support-img5@1x.png'),
//     img2: ('./img/support/support-img5@2x.png'),
//   },
//   {
//     title: 'Serhiy Prytula Charity Foundation',
//     url: 'https://prytulafoundation.org/en',
//     img: ('./img/support/support-img6@1x.png'),
//     img2: ('./img/support/support-img6@2x.png'),
//   },
//   {
//     title: 'Medicins Sans Frontieres',
//     url: 'https://www.msf.org/ukraine',
//     img: ('./img/support/support-img7@1x.png'),
//     img2: ('./img/support/support-img7@2x.png'),
//   },
//   {
//     title: 'World vision',
//     url: 'https://www.wvi.org/emergencies/ukraine',
//     img: ('./img/support/support-img8@1x.png'),
//     img2: ('./img/support/support-img8@2x.png'),
//   }, 
//   {
//     title: 'UNITED24',
//     url: 'https://u24.gov.ua/uk',
//     img: ('./img/support/support-img9@1x.png'),
//     img2: ('./img/support/support-img9@2x.png'),
//   },
// ];

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


refs.upBtn.addEventListener('click', onLater);

// function findImage(name, anArrayImage) {
//   return anArrayImage.find(found => found.title === name);
// }

function renderMarkup(array) {
  refs.supportList.insertAdjacentHTML("beforeend", array);
  
}

const markup = supportArray
  .map(({ title, url, img, img2 }, index) => {
  const number = (index + 1).toString().padStart(2, '0');
  // const imgfinded = findImage(title, supportArray);
  // const img = imgfinded.img;

    return `
    <div class="support-list-item swiper-slide">
       <a href="${url}" class="support-link" aria-label="${title}" target="_blank" rel="noopener noreferrer nofollow">
         <p class="support-number">${number}</p>
           <img class="support-img" src="${img}" data-source="${img2}" alt="${title}" />
       </a>
     </div>`;
  })
  .join('');
renderMarkup(markup);


const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});

function onLater() { swiper.slideNext(200);
}
  