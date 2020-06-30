function personAndTeacher() {
  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }

    toString() {
      return `Person (name: ${this.name}, email: ${this.email})`;
    }
  }

  class Student extends Person {
    constructor(name, email, course) {
      super(name, email);
      this.course = course;
    }

    toString() {
      return `${super.toString()}, course: ${this.course})`;
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email);
      this.subject = subject;
    }

    toString() {
      return `${super.toString()}, subject: ${this.subject})`;
    }
  }

  return { Person, Student, Teacher };
}

const classes = personAndTeacher();

const Person = classes.Person;
const Teacher = classes.Teacher;
const Student = classes.Student;

const p1 = new Person("John", "john@email.com");
const t1 = new Teacher("John", "john@email.com", "Programming");
const s1 = new Student("John", "john@email.com", "Javascript");

console.log(p1.toString());
console.log(t1.toString());
console.log(s1.toString());

// Points 33/100
