function create(words) {
   const contentDiv = document.getElementById('content');

   words.forEach(string => {
      const divEl = document.createElement('div');
      const pEl = document.createElement('p');
      pEl.textContent = string;
      pEl.style.display = 'none';
      
      divEl.appendChild(pEl);
      
      contentDiv.appendChild(divEl)
   });
   
   contentDiv.addEventListener('click', onClick);

   function onClick(ev) {
      if (ev.target.querySelector('p').style.display == 'none') {
         ev.target.querySelector('p').style.display = ''
      } else {
         ev.target.querySelector('p').style.display = 'none';
      }      
   }
}