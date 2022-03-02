function solve() {
  const [inputTextarea, outputTextarea] = document.querySelectorAll('#exercise textarea');
  const [generateBtn, buyBtn] = document.querySelectorAll('#exercise button');

  generateBtn.addEventListener('click', addItems);
  buyBtn.addEventListener('click', buyCheckedItems);

  function addItems() {
    const items = JSON.parse(inputTextarea.value);

    items.forEach(i => {
      newItemFactory(i.img, i.name, i.price, i.decFactor);
    });

  }

  function buyCheckedItems() {

    const selectedItems = Array.from(document.querySelectorAll('.table tbody input'))
      .filter(item => item.checked == true);
     
    let names = [];
    let itemsPrice = [];
    let factorStat = []; 

    selectedItems.forEach(item => {
      const itemParent = item.parentNode.parentNode;
      names.push(itemParent.querySelector('td:nth-child(2) p').textContent);
      itemsPrice.push(Number(itemParent.querySelector('td:nth-child(3) p').textContent));
      factorStat.push(Number(itemParent.querySelector('td:nth-child(4) p').textContent));
    });

    outputTextarea.value += `Bought furniture: ${names.join(', ')}\n`;
    outputTextarea.value += `Total price: ${(itemsPrice.reduce((a, b) => a + b, 0)).toFixed(2)}\n`
    outputTextarea.value += `Average decoration factor: ${factorStat.reduce((a, b) => a + b, 0) / factorStat.length}`
  }

  function newItemFactory(imgLink, itemName, itemPrice, itemFactor) {
    //new item row
    const tr = document.createElement('tr');
    //create img td
    const imgTD = document.createElement('td');
    const img = document.createElement('img');
    img.src = imgLink;
    imgTD.appendChild(img)
    //create name td
    const nameTD = document.createElement('td');
    const name = document.createElement('p');
    name.textContent = itemName;
    nameTD.appendChild(name);
    //create price td
    const priceTD = document.createElement('td');
    const price = document.createElement('p');
    price.textContent = Number(itemPrice);
    priceTD.appendChild(price);
    //create decFactor td
    const factorTD = document.createElement('td');
    const factor = document.createElement('p');
    factor.textContent = Number(itemFactor);
    factorTD.appendChild(factor);
    //create checkbox field
    const checkboxTD = document.createElement('td');
    const check = document.createElement('input');
    check.type = 'checkbox';
    checkboxTD.appendChild(check);

    tr.appendChild(imgTD);
    tr.appendChild(nameTD);
    tr.appendChild(priceTD);
    tr.appendChild(factorTD);
    tr.appendChild(checkboxTD)

    document.querySelector('.table tbody').appendChild(tr)
  }
}