function solve() {
    const [name, hall, priceField] = document.querySelectorAll('#container input');
    const moviesSection = document.querySelector('#movies ul');
    const archiveSection = document.querySelector('#archive ul');

    const onScreenBtn = document.querySelector('#container button');
    onScreenBtn.addEventListener('click', addMovie);
    
    const clearBtn = document.querySelector('#archive button');
    clearBtn.addEventListener('click', () => { archiveSection.textContent = '' });


    function addMovie(ev) {
        ev.preventDefault();
        let price = priceField.value;


        if (name.value != '' && hall.value != '' && price != '' && !isNaN(Number(price))) {
            price = Number(price);

            const movie = document.createElement('li');
            const movieName = document.createElement('span');
            movieName.textContent = name.value;
            const movieHall = document.createElement('strong');
            movieHall.textContent = `Hall: ${hall.value}`;
            const div = document.createElement('div');

            movie.appendChild(movieName);
            movie.appendChild(movieHall);
            movie.appendChild(div);

            const innerStrong = document.createElement('strong');
            innerStrong.textContent = price.toFixed(2);
            const innerInput = document.createElement('input');
            innerInput.placeholder = "Tickets Sold";
            const archiveBtn = document.createElement('button');
            archiveBtn.textContent = 'Archive';
            archiveBtn.addEventListener('click', archiveMovie);

            div.appendChild(innerStrong);
            div.appendChild(innerInput);
            div.appendChild(archiveBtn);

            moviesSection.appendChild(movie);

            name.value = '';
            hall.value = '';
            priceField.value = '';
        }
    }

    function archiveMovie(ev) {
        const parent = ev.target.parentNode.parentNode;
        const ticketsSoldField = parent.querySelector('input');
        const ticketsPrice = Number(ticketsSoldField.previousSibling.textContent);
        const ticketsSold = ticketsSoldField.value;
        
        if(!isNaN(Number(ticketsSold)) && ticketsSold != ''){
           const movie = document.createElement('li');
           
           const movieName = document.createElement('span');
           movieName.textContent = parent.querySelector('span').textContent;
           const totalAmount = document.createElement('strong');
           totalAmount.textContent = `Total amount: ${(ticketsPrice * Number(ticketsSold)).toFixed(2)}`;
           const deleteBtn = document.createElement('button');
           deleteBtn.textContent = 'Delete';
           deleteBtn.addEventListener('click', deleteArchive);

           movie.appendChild(movieName);
           movie.appendChild(totalAmount);
           movie.appendChild(deleteBtn);

           ev.target.parentNode.parentNode.remove();
           archiveSection.appendChild(movie);
        }
    }

    function deleteArchive(ev){
        ev.target.parentElement.remove();
    }
}