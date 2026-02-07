"use strict"
function Person(name) {
    this.name = name;
}

Person.prototype.describeRole = function () {
    console.log(`I am a Person`);
};


function Student(name, university, faculty, subjects) {
    Person.call(this, name);
    this.university = university;
    this.faculty = faculty;
    this.subjects = subjects;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.describeRole = function () {
    console.log("I am a student");
};

Student.prototype.calculateAverage = function () {
    let sum = 0;
    for (let grade of this.subjects) sum += grade;
    sum /= this.subjects.length;
    return sum;
}

Student.prototype.calculateLetterGrade = function () {
    let avg = this.calculateAverage();
    if (avg >= 90) return 'A';
    else if (avg >= 80) return 'B';
    else if (avg >= 70) return 'C';
    else if (avg >= 60) return 'D';
    else return 'F';
}

Student.prototype.printInfo = function () {
    console.log(
        `${this.name} studies at ${this.university}, faculty of ${this.faculty},has an average grade of ${this.calculateAverage()} and a letter grade ${this.calculateLetterGrade()}`
    );
};


let student1 = new Student(
    "Shahd",
    "SCU",
    "Computer Science",
    [95, 88, 92, 90]
);

student1.printInfo();


function Teacher(name, subjects) {
    Person.call(this, name);
    this.subjects = subjects;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.describeRole = function () {
    console.log("I am a teacher");
};


Teacher.prototype.teach = function () {
    console.log(...this.subjects);
}

Teacher.prototype.subjectsCount = function () {
    return this.subjects.length;
}


let teacher1 = new Teacher("Hessain", ["AWS", "CloudSystem", "Springboot"]);
teacher1.teach();