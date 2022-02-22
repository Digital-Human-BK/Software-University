function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let dataList = document.querySelectorAll('tbody tr');
      const input = document.getElementById('searchField').value.toLowerCase();
      console.log(dataList);
      console.log(input);
      for (let row of dataList) {
         if (row.textContent.toLocaleLowerCase().includes(input)){
            row.setAttribute('class', 'select');
         } else {
            row.removeAttribute('class')
         }
      }
   }
}