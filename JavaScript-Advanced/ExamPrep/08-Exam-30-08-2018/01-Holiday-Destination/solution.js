function addDestination() {
  const [city, country] = document.querySelectorAll('#input .inputData');
  const seasons = document.getElementById('seasons');
  const destinations = document.getElementById('destinationsList');
  const [summer, autumn, winter, spring] = Array.from(document.getElementsByClassName('summary'));

  if (city.value != '' && country.value != '') {
    const season = seasons.options[seasons.selectedIndex].text;

    const tr = document.createElement('tr');
    const destinationTd = document.createElement('td');
    destinationTd.textContent = `${city.value}, ${country.value}`;
    const seasonTd = document.createElement('td');
    seasonTd.textContent = season;
    tr.appendChild(destinationTd);
    tr.appendChild(seasonTd);
    destinations.appendChild(tr);

    

    if (season === 'Summer') {
      summer.value = Number(summer.value) + 1;
    } else if (season === 'Autumn') {
      autumn.value = Number(autumn.value) + 1;
    } else if (season === 'Winter') {
      winter.value = Number(winter.value) + 1;
    } else if (season === 'Spring') {
      spring.value = Number(spring.value) + 1;
    }

    city.value = '';
    country.value = '';
    seasons.selectedIndex = 0;
  }
}