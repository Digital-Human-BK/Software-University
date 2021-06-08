function projects(input) {

  let name = input[0];
  let projectsCount = Number(input[1]);

  let totalHours = projectsCount * 3;

  console.log(`The architect ${name} will need ${totalHours} hours to complete ${projectsCount} project/s.`);

}

projects(['George', '4'])