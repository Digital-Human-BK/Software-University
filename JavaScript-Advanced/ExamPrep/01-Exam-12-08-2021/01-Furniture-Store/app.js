window.addEventListener('load', solve);

function solve() {
    //get reference to elements of interest
    const modelField = document.getElementById('model');
    const yearField = document.getElementById('year');
    const descriptionField = document.getElementById('description');
    const priceField = document.getElementById('price');
    const furnitureList = document.getElementById('furniture-list')
    const addBtn = document.getElementById('add');
    let totalPrice = 0;

    //configue event listeners
    addBtn.addEventListener('click', addItem);

    //add new item to list
    function addItem(ev) {
        ev.preventDefault();
        const model = modelField.value;
        const year = Number(yearField.value);
        const description = descriptionField.value;
        const price = Number(priceField.value);
        //read and validate input
        if (model.trim() !== '' && description.trim() !== '' && year > 0 && price > 0) {
            let priceContent = price.toFixed(2)
            //create new list item
            //config listeners for the new list item
            const moreInfoBtn = newElement('button', { className: 'moreBtn' }, 'More Info');
            const buyBtn = newElement('button', { className: 'buyBtn' }, 'Buy it')

            const itemRow = newElement('tr', { className: 'info' },
                newElement('td', {}, model),
                newElement('td', {}, priceContent),
                newElement('td', {},
                    moreInfoBtn,
                    buyBtn),
            );

            const infoRow = newElement('tr', { className: 'hide' },
                newElement('td', {}, `Year: ${year}`),
                newElement('td', { colSpan: '3' }, `Description: ${description}`)
            );


            moreInfoBtn.addEventListener('click', toggleInfo.bind(this));
            buyBtn.addEventListener('click', buyIt.bind(null, itemRow, infoRow, price));


            furnitureList.appendChild(itemRow);
            furnitureList.appendChild(infoRow);

            function toggleInfo(ev) {
                if (ev.target.textContent == 'More Info') {
                    ev.target.textContent = 'Less Info';
                    infoRow.style.display = 'contents';
                } else if (ev.target.textContent == 'Less Info') {
                    ev.target.textContent = 'More Info';
                    infoRow.style.display = 'none';
                }
            }
            document.querySelector('form').reset();
        }
    }
    function buyIt(item, info, price){
        totalPrice+=price;
        document.querySelector('.total-price').textContent = totalPrice.toFixed(2);
        item.remove();
        info.remove();
    }

    function newElement(type, attr, ...content) {
        const resultElement = document.createElement(type);

        for (let prop in attr) {
            resultElement[prop] = attr[prop];
        }

        for (let item of content) {
            if (typeof item === 'string' || typeof item === 'number') {
                item = document.createTextNode(item);
            }
            resultElement.appendChild(item);
        }
        return resultElement;
    }
}