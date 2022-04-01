function toStringExtension() {
  class Person {
    constructor(name, email){
      this.name = name;
      this.email = email;
    }

    toString(){
      if (this.subject != undefined) {
        return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
      } else if (this.course != undefined) {
        return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`
      } else {
        return `Person (name: ${this.name}, email: ${this.email})`
      }
    }
  }

  class Teacher extends Person{
    constructor(name, email, subject){
      super(name, email);
      this.subject = subject;
    }
  }

  class Student extends Person{
    constructor(name, email, course){
      super(name, email);
      this.course = course;
    }
  }

  return {
      Person,
      Teacher,
      Student
  }
}
