function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.toString = function () {
    return `${this.name}, age: ${this.age}, gender: ${this.gender}`;
  };
}

const person1 = new Person("James Brown", 73, "male");
console.log("person1: " + person1); //prints person1: James Brown, age: 73, gender: male

const person2 = new Person("Jane Brown", 65, "female");
console.log("person2: " + person2); //prints person2: Jane Brown, age: 65, gender: female


function Student(name, age, gender){
    
    const student = Person.call(this, ...arguments);

    this.cohort = 'students';
    
    this.toString = function () {
        return `${this.name}, age: ${this.age}, gender: ${this.gender}, cohort: ${this.cohort}`;
    };

    return student;
}

const student1 = new Student("John Brown", 21, "male");
console.log("student1: " + student1); //prints student1: John Brown, age: 21, gender: male, cohort: students

const student2 = new Student("Janet Brown", 21, "female");
console.log("student2: " + student2); //prints student2: Janet Brown, age: 21, gender: female, cohort: students