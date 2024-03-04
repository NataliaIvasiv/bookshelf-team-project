import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

export function showError() { 
iziToast.error({
    title: '',
    backgroundColor: 'rgb(230, 92, 33)',
    message:
      'there are some issues with network',
    position: 'topLeft',
});
}

export function emptyPage(){
       
iziToast.error({
    title: '',
    backgroundColor: 'rgb(230, 92, 33)',
    message:
      'there are no books in this category',
    position: 'topLeft',
});
}
