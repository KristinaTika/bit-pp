"use strict";

function Subject(subject) {

    this.subject = subject;
}
Subject.prototype.getSubjectName = function () {

    return this.subject;
}
