var dataModule = (function() {
   
    function Subject(name){
        this.name = name;
    }
    Subject.prototype.getSubjectName = function(){
        return this.name;
    }

    function Student(name){
        this.name = name;
    
    }
    Student.prototype.getStudentData = function(){
        return this.name + " " + this.surname;
    }
    
    function Exam(subject, student, grade){
        this.subject = subject;
        this.student = student;
        this.grade = grade;
    }
    Exam.prototype.getExamInfo = function(){
        return this.subject.getSubjectName() + " " + this.student.getStudentData();
    }
    Exam.prototype.hasPassed = function(){
        return this.grade > 5;
    }

    function createExam(collectedData){
        var createdSubject = new Subject(collectedData.subject)
        var createdStudent = new Student(collectedData.studentName);
        var createdExam = new Exam(createdSubject, createdStudent, collectedData.grade);

        return createdExam;
    }

    return {
        createExam: createExam, 
    }

})();