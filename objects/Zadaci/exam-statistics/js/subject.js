

 function Subject (subject){

    this.subjectName = subject;
}

Subject.prototype.getSubjectName = function (){

    return this.subjectName;
}

var a = new Subject ("olovka");

console.log(a.getSubjectName());
