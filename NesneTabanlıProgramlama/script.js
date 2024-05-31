// let kaan = {

//     name:"Kaan",
//     yearOfBirth: 2008,
//     job: "student",
// }

// val = kaan;
// console.log(val);
// console.log(typeof val); // obje

// function Student(name, yearOfBirth, job){
//     this.name= name;
//     this.yearOfBirth= yearOfBirth;
//     this.job=job;

//     this.calculateAge = function(){
//         return 2024 - this.yearOfBirth;
//     }

// }

let Student = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;

  this.calculateAge = function () {
    return 2024 - this.yearOfBirth;
  };
};

let kaan = new Student("kaan", 2008, "student");
let aylin = new Student("aylin", 2006, "student");



//! PROTOTYPE

let Person = function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

Person.prototype.calculateAge = function(){
     return 2024 - this.yearOfBirth;
}

Person.prototype.getName=function(){
    return this.name;
}

let fatmanur = new Person("fatmanur",2000, "engineer")

let elif = new Person("elif",2018,"student");

elif.calculateAge();














