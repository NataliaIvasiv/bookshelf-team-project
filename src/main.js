import axios from "axios";
import iziToast from "izitoast";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './js/themes.js';

import { booksAPI } from "./js/booksAPI";

const booksApi = new booksAPI();

booksApi.getCategoriesList();
booksApi.getPopularBooks();
