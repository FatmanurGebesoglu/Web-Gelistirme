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

//! Object.create Metodu

let personProto = {
    calculateAge : function () {
        return 2024 - this.yearOfBirth;
    }
}

let mine = Object.create(personProto);

mine.name = "mine";
mine.yearOfBirth = 2004;
mine.job = "student";

let murat = Object.create(personProto, {
    name: {value:"murat"},
    yearOfBirth: {value: 2000},
    job: {value: officer},
});



//! PROTOTYPE Tabanlı Miras Alma


let Kisi = function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

Kisi.prototype.calculateAge=function(){
    return 2024 - this.yearOfBirth;
}


let Teacher = function(name,yearOfBirth,job,subject){
    Kisi.call(this,name,yearOfBirth,job);
    this.subject=subject;
}

// Inherit the Kisi prototype methods
Teacher.prototype = Object.create.prototype(Person.prototype);

// Set Teacher constructor
Teacher.prototype.constructor= Teacher;

let hüsniye = new Teacher("hüsniye",1998,"teacher","database");


console.log(hüsniye);
console.log(hüsniye.calculateAge());



