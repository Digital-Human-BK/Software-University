function notify(message) {
  let popUp = document.getElementById('notification');
  popUp.addEventListener('click', () => {popUp.style.display = 'none'})

  if(popUp.style.display == '') {
    popUp.style.display = 'none'
  }
  
  if (popUp.style.display == 'none') {
    popUp.style.display = 'block'
    popUp.textContent = message;
  }
}