import {refs} from './refs'
export function showLoader() {
    refs.loadElem.classList.remove('hide-loader');
  }
 export function hideLoader() {
     refs.loadElem.classList.add('hide-loader');
  }
