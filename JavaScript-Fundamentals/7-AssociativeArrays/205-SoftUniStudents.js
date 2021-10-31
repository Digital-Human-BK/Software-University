function softUniStidents(input) {
  let softUni = {};

  for (const line of input) {
    if (line.includes(': ')) {
      addCourse(line);
    } else {
      addStudent(line);
    }
  }

  let sortedCourses = Object.keys(softUni).sort((a, b) => {
    return softUni[b].students.length - softUni[a].students.length;
  })

  sortedCourses.forEach(course => {
    console.log(`${course}: ${softUni[course].capacity - softUni[course].students.length} places left`);
    let sortedStudents = softUni[course].students.sort((a, b) => {
      return b.credits - a.credits;
    });

    sortedStudents.forEach(student => {
      console.log(`--- ${student.credits}: ${student.username}, ${student.email}`);
    });
  });

  //functions
  function addCourse(line) {
    let [courseName, capacity] = line.split(': ');
    capacity = Number(capacity);
    if (softUni[courseName]) {
      softUni[courseName].capacity += capacity;
    } else {
      softUni[courseName] = {
        capacity,
        students: [],
      }
    }
  }

  function addStudent(line) {
    let [userInfo, rest] = line.split(' with email ');
    let [email, courseName] = rest.split(' joins ');
    let username = userInfo.slice(0, userInfo.indexOf('['));
    let credits = Number(userInfo.slice(userInfo.indexOf('[') + 1, -1));


    if (softUni[courseName] && softUni[courseName].students.length < softUni[courseName].capacity) {
      student = {
        username,
        credits,
        email,
      }
      softUni[courseName].students.push(student);
    }
  }
}
softUniStidents(['JavaBasics: 2',
  'user1[25] with email user1@user.com joins C#Basics',
  'C#Advanced: 3',
  'JSCore: 4',
  'user2[30] with email user2@user.com joins C#Basics',
  'user13[50] with email user13@user.com joins JSCore',
  'user1[25] with email user1@user.com joins JSCore',
  'user8[18] with email user8@user.com joins C#Advanced',
  'user6[85] with email user6@user.com joins JSCore',
  'JSCore: 2',
  'user11[3] with email user11@user.com joins JavaBasics',
  'user45[105] with email user45@user.com joins JSCore',
  'user007[20] with email user007@user.com joins JSCore',
  'user700[29] with email user700@user.com joins JSCore',
  'user900[88] with email user900@user.com joins JSCore'])