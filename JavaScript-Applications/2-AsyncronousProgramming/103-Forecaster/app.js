function attachEvents() {
    document.getElementById('submit').addEventListener('click', displayForecast);
}
attachEvents();

async function displayForecast() {
    document.getElementById('forecast').style.display = 'block';
    document.getElementById('upcoming').style.display = 'none';

    const forecastDiv = document.querySelector('.forecasts');
    if(forecastDiv != null) {
        forecastDiv.style.display = 'none'
    }

    document.querySelector('#current .label').textContent = `Loading  new forecast...`;

    try {
        const location = document.getElementById('location').value.trim();

        const url = 'http://localhost:3030/jsonstore/forecaster/locations';

        const res = await fetch(url);        
        const locationsList = await res.json();

        const city = locationsList.find(c => c.name.toLowerCase() === location.toLowerCase());
        const code = city.code;

        const [currentData, upcomingData] = await Promise.all([
            getCurrentConditions(code),
            getLocationForecast(code)
        ]);

        composeForecast(currentData, upcomingData);
    } catch (error) {
        alert('Something went wrong!\n\nPress OK to continue.')
        document.querySelector('#current .label').textContent = 'Forecast unavailable!'
    }
}

async function getCurrentConditions(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code;
    const res = await fetch(url);

    return res.json();
}

async function getLocationForecast(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code;
    const res = await fetch(url);

    return res.json();
}

function composeForecast(current, upcoming) {
    const forecastDivSection = document.getElementById('current');
    const upcomingDivSection = document.getElementById('upcoming');

    const condList = {
        'Sunny': '\u2600', // ☀
        'Partly sunny': '\u26C5', // ⛅
        'Overcast': '\u2601', // ☁
        'Rain': '\u2614', // ☂
        'Degrees': '\u00B0',   // °
    }

    const lowHigh = `${current.forecast.low}${condList['Degrees']}/${current.forecast.high}${condList['Degrees']}`

    const currentWeatherDiv = el('div', { className: 'forecasts' },
        el('span', { className: 'condition symbol' }, condList[current.forecast.condition]),
        el('span', { className: 'condition' },
            el('span', { className: 'forecast-data' }, current.name),
            el('span', { className: 'forecast-data' }, lowHigh),
            el('span', { className: 'forecast-data' }, current.forecast.condition)
        )
    )

    const upcomingWeatherDiv = el('div', { className: 'forecast-info' },
        ...upcoming.forecast.map(d => {
            let temp = `${d.low}${condList['Degrees']}/${d.high}${condList['Degrees']}`
            const element = el('span', { className: 'upcoming' },
                el('span', { className: 'symbol' }, condList[d.condition]),
                el('span', { className: 'forecast-data' }, temp),
                el('span', { className: 'forecast-data' }, d.condition)
            )
            return element;
        })
    )
    forecastDivSection.removeChild(forecastDivSection.lastChild);
    forecastDivSection.appendChild(currentWeatherDiv);
    upcomingDivSection.removeChild(upcomingDivSection.lastChild);
    upcomingDivSection.appendChild(upcomingWeatherDiv);

    document.querySelector('#current .label').textContent = `Current conditions`;
    document.getElementById('upcoming').style.display = 'block';
    document.getElementById('forecast').style.display = 'block';
}

function el(type, attr, ...content) {
    const element = document.createElement(type);
    Object.assign(element, attr);

    for (let item of content) {
        if (typeof item == 'string' || typeof item == 'number') {
            item = document.createTextNode(item);
        }
        element.appendChild(item);
    }
    return element;
}