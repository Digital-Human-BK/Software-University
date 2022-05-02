const element = document.querySelector('#errorBox');
const span = document.querySelector('#errorBox span');

export function notify(message){
  span.textContent = message;
  element.style.display = 'block';
  setTimeout(()=> element.style.display = 'none', 3000);
}