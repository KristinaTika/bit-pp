
var uiModule = (function () {

    function collectFormData() {

        var selectSubject = $(".add-subject");
        var studentNameInput = $(".add-student-name");
        var gradeInput = $(".add-grade");

        var subject = selectSubject.val();
        var studentName = studentNameInput.val();
        var grade = gradeInput.val();

        return {
            subject: subject,
            studentName: studentName,
            grade: grade
        }
    }

    function updateList(exam) {
        var passedList = $("passed-list");
        var failedList = $("failed-list");
        var gradeInput = $(".add-grade");
        var grade = gradeInput.val();

        if (dataModule.createdExam.hasPassed(grade)) {
          return  passedList.html += $(`
            <div class="item clearfix passed-item" id="passed-${idCounter}">
                <div class="item-description">
                  ${createExam.createdStudent.getStudentData()}
                </div>
                <div class="item-description student-data">
                ${createdSubject.getSubjectName()}
                </div>
                <div class="right clearfix">
                    <div class="item-value">${gradeValue}
                </div>
                <div class="item-delete">
                    <button class="item-delete-btn">x</button>
                </div>
            </div>`)
            idCounter++;
        } else {
            return  failedList.html += ('<div class="item clearfix passed-item" id="passed-' + idCounter + '"><div class="item-description">' + createdStudent.getStudentData() + '</div><div class="item-description student-data">' + createdSubject.getSubjectName() + '</div><div class="right clearfix"><div class="item-value">' + gradeValue + '</div><div class="item-delete"><button class="item-delete-btn">x</button></div></div></div>')
            idCounter++;
        }
    }

    return {
        collectFormData: collectFormData,
        updateList: updateList
    }

})();