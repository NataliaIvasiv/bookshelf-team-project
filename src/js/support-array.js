export const supportArray = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: new URL('../../img/support/support-img1@1x.png'),
    img2: new URL('../../img/support/support-img1@2x.png'),
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: new URL('../../img/support/support-img2@1x.png'),
    img2: new URL('../../img/support/support-img2@2x.png'),
  },
    {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: new URL('../../img/support/support-img3@1x.png'),
    img2: new URL('../../img/support/support-img3@2x.png'),
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: new URL('../../img/support/support-img4@1x.png'),
    img2: new URL('../../img/support/support-img4@2x.png'),
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: new URL('../../img/support/support-img5@1x.png'),
    img2: new URL('../../img/support/support-img5@2x.png'),
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: new URL('../../img/support/support-img6@1x.png'),
    img2: new URL('../../img/support/support-img6@2x.png'),
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: new URL('../../img/support/support-img7@1x.png'),
    img2: new URL('../../img/support/support-img7@2x.png'),
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: new URL('../../img/support/support-img8@1x.png'),
    img2: new URL('../../img/support/support-img8@2x.png'),
  }, 
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: new URL('../../img/support/support-img9@1x.png'),
    img2: new URL('../../img/support/support-img9@2x.png'),
  },
];

export const markupCardFund = (
  { title, url, img, img2 },
  position
) => `<li class="support__list-item swiper-slide">
  <p class="support__number">${position}</p>
  <a class="support__link" href="${url}" target="_blank" rel="noopener noreferrer nofollow">
    <img
      srcset="${img} 1x, ${img2} 2x"
      src="${img}"
      alt="${title}"
      width="149"
      loading="lazy"
    />
  </a>
</li>`;