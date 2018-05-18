
 function Subject (subject){

    this.subjectName = subject;
}

Subject.prototype.getSubjectName = function (){

    return this.subjectName;
}

var a = new Subject ("olovka");

console.log(a.getSubjectName());




function Student (name, surname) {

    this.name = name;
    this.surname = surname;
}

Student.prototype.getStudentData = function (){

    return this.name + " " + this.surname;
}

var student = new Student ( "pera", "peric");

console.log(student);
console.log(student.getStudentData());


function Exam (sub, student, grade) {
    Student.call(this, name, surname);
    this.subject = sub;
    this.student = student;
    this.grade = grade;
}

Exam.prototype.getExamInfo = function () {

    return this.subject + this.getStudentData();
}

Exam.prototype.hasPassed = function (student) {

    if (this.grade > 5){
        return "passed";
    } else {
        return "failed";
    }
}


var ispit = new Exam ("predmet", "pera", "5");

console.log(ispit.getExamInfo());
console.log(ispit.hasPassed("pera"));




//kako se dodaje event listener
//document.querySelector(".create-movie").addEventListener("click", function (event){addMovie()});