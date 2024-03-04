function showError(){
 return `   
iziToast.error({
    title: '',
    backgroundColor: 'rgb(230, 92, 33)',
    message:
      'there are some issues with network'
    position: 'center',
})`;
}

function emptyPage(){
    return `   
iziToast.error({
    title: '',
    backgroundColor: 'rgb(230, 92, 33)',
    message:
      'there are no books in this category'
    position: 'center',
})`;
}