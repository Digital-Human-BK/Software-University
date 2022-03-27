class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(username, salary, role, dep) {

    if (username && salary && role && dep) {
      if (salary < 0) {
        throw new Error('Invalid input!');
      }

      if (this.departments[dep] == undefined) {
        this.departments[dep] = [];
      }

      this.departments[dep].push({username, salary, role});
      return `New employee is hired. Name: ${username}. Position: ${role}`

    } else {
      throw new Error('Invalid input!');
    }
  }

  bestDepartment(){
    const result =[];
    const sortedDepartments = Object.entries(this.departments).sort(compareFn);
    const bestDep = sortedDepartments[0]
    const bestAverage = bestDep[1].reduce((acc, w) => acc + w.salary, 0) / bestDep[1].length;
    result.push(`Best Department is: ${bestDep[0]}`);
    result.push(`Average salary: ${bestAverage.toFixed(2)}`);

    const sortedWorkers = bestDep[1].sort((a,b) => {
      return b.salary - a.salary || a.username.localeCompare(b.username);
    });

    sortedWorkers.forEach(w => {
      result.push(`${w.username} ${w.salary} ${w.role}`);
    });

    return result.join('\n');

    function compareFn(a, b) {
      const averageA = a[1].reduce((acc, w) => acc + w.salary, 0) / a[1].length;
      const averageB = b[1].reduce((acc, w) => acc + w.salary, 0) / b[1].length;
      return averageB - averageA;
    }    
  }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());