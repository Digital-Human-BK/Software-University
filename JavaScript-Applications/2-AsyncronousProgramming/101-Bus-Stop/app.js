async function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');

    try {
        buses.textContent = '';
        stopName.textContent = 'Loading...'
        const response = await fetch('http://localhost:3030/jsonstore/bus/businfo/' + stopId);

        if (response.status != 200) {
            throw new Error('Stop ID not found');
        }

        const data = await response.json();

        stopName.textContent = data.name;

        Object.entries(data.buses).forEach(([busId, time]) => {
            const li = document.createElement('li');
            li.textContent = `Bus ${busId} arrives in ${time} minutes`;
            buses.appendChild(li);
        });

    } catch (error) {
        stopName.textContent = `Error: Bus stop not found!`
    }
}
