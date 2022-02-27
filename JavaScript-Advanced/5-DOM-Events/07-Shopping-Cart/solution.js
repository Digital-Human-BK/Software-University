function solve() {
   const output = document.querySelector('textarea');
   let cart =[];

   Array.from(document.querySelectorAll('.add-product')).forEach(btn => {
      btn.addEventListener('click', onClick);
   });

   document.querySelector('.checkout').addEventListener('click', onClickCheckout);

   function onClick(ev){
      const parent = ev.target.parentNode.parentNode;
      const name = parent.querySelector('.product-title').textContent;
      const price = Number(parent.querySelector('.product-line-price').textContent);
      
      output.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
      cart.push({name, price});
   }

   function onClickCheckout(ev){
      const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)
      const itemsList = [];

      cart.forEach(item => {
         if (itemsList.includes(item.name) == false){
            itemsList.push(item.name);
         }
      })
      output.textContent += `You bought ${itemsList.join(', ')} for ${totalPrice.toFixed(2)}.`
      
      Array.from(document.querySelectorAll('.add-product')).forEach(btn => btn.disabled = true)
      ev.target.disabled = true;
   }   
}