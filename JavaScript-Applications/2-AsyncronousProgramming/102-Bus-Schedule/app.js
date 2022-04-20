function solve() {
    const infoBox = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let stopId = {
        next: 'depot'
    }

    async function depart() {

        try {
            departBtn.disabled = true;
            const res = await fetch('http://localhost:3030/jsonstore/bus/schedule/' + stopId.next);
            stopId = await res.json();

            infoBox.textContent = `Next stop ${stopId.name}`;
            arriveBtn.disabled = false;
        } catch (error) {
            infoBox.textContent = 'Error'
        }
    }

    function arrive() {
        infoBox.textContent = `Arriving at ${stopId.name}`
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();