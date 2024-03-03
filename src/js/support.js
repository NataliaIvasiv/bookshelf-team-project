export const supportArray = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: '../../img/support/support-img1@1x.png',
    img2: '../../img/support/support-img1@2x.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: '../../img/support/support-img2@1x.png',
    img2: '../../img/support/support-img2@2x.png',
  },
    {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: '../../img/support/support-img3@1x.png',
    img2: '../../img/support/support-img3@2x.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: '../../img/support/support-img4@1x.png',
    img2: '../../img/support/support-img4@2x.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: '../../img/support/support-img5@1x.png',
    img2: '../../img/support/support-img5@2x.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: '../../img/support/support-img6@1x.png',
    img2: '../../img/support/support-img6@2x.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: '../../img/support/support-img7@1x.png',
    img2: '../../img/support/support-img7@2x.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: '../../img/support/support-img8@1x.png',
    img2: '../../img/support/support-img8@2x.png',
  }, 
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: '../../img/support/support-img9@1x.png',
    img2: '../../img/support/support-img9@2x.png',
  },
];

import Swiper from 'swiper';

const supportListEl = document.querySelector('.support__list-js');
const btnSwiperEl = document.querySelector('.swiper-button-next');

let position = 0;

const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

const markup = supportArray.map(({ title, url, img, img2 }) => {
  return `<div class="support__item swiper-slide">
    <a href="${url}" class="support__link img" aria-label="${title}" target="_blank" rel="noopener noreferrer nofollow">
      <img class="support__img" src="${img}" data-source="${img2}" alt="${title}" style="filter: brightness(0) invert(1);" />
    </a>
  </div>`;
}).join('');

renderMarkup(markup);

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  spaceBetween: 20,
  slidesPerView: 'auto',
  rewind: true,

  navigation: {
    nextEl: '.swiper-button-next',
  },
});

swiper.update();

btnSwiperEl.addEventListener('click', () => {
  swiper.slideNext();
});