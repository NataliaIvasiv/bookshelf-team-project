import axios from "axios";
import iziToast from "izitoast";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { booksAPI } from "./js/booksAPI";
import './js/category-render-function';
import './js/category-template';
import './js/localStorageFunctions';
import './js/modal';
import './js/refs';
import './js/themes';
import './js/shopping-list-render-function';
import './js/shopping-list-template';


const booksApi = new booksAPI();

booksApi.getSelectedCategory("Advice How-To and Miscellaneous");
booksApi.getBookDetailedInfo("643282b1e85766588626a080");

