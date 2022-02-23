function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const input = document.querySelector('#inputs textarea');

   function onClick() {
      const inputArray = JSON.parse(input.value);

      const restaurants = {};

      for (const line of inputArray) {
         let [name, rest] = line.split(' - ');

         let workersArr = rest.split(', ').map(w => {
            w = w.split(' ')
            w[1] = Number(w[1]);
            return w;
         });

         if (restaurants[name] == undefined) {

            restaurants[name] = { workers: workersArr, averageSalary: 0 }
         } else {

            restaurants[name].workers = restaurants[name].workers.concat(workersArr);
         }

         restaurants[name].averageSalary = restaurants[name].workers.reduce((acc, w) => acc + w[1], 0) / restaurants[name].workers.length;

      }

      const sortedRestaurants = Object.keys(restaurants)
         .sort((a, b) => restaurants[b].averageSalary - restaurants[a].averageSalary);

      const sortedSalary = restaurants[sortedRestaurants[0]].workers
         .sort((a, b) => b[1] - a[1]);

      const bestRestaurantText = `Name: ${sortedRestaurants[0]} Average Salary: ${restaurants[sortedRestaurants[0]].averageSalary.toFixed(2)} Best Salary: ${sortedSalary[0][1].toFixed(2)}`

      const bestWorkersText = sortedSalary.map(w => `Name: ${w[0]} With Salary: ${w[1]}`).join(' ');

      document.querySelector('#bestRestaurant p').textContent = bestRestaurantText;
      document.querySelector('#workers p').textContent = bestWorkersText;
   }
}