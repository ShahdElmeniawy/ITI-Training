class Person {
    constructor(name) {
        this.name = name;
    }
    getInfo() {
        console.log(this.name);
    }
}

class Student extends Person {
    static counter = 0;
    #grades;

    constructor(name, grades) {
        super(name);
        this.#grades = grades;
        Student.counter++;
    }

    getAverage() {
        let sum = 0;
        for (let grade of this.#grades) {
            sum += grade;
        }
        return sum / this.#grades.length;
    }

    updateGrades(grade) {
        this.#grades.push(grade);
    }

    getFinalGrade() {
        const avg = this.getAverage();

        if (avg >= 90) return 'A';
        else if (avg >= 80) return 'B';
        else if (avg >= 70) return 'C';
        else if (avg >= 60) return 'D';
        else return 'F';
    }

    getInfo() {
        console.log(
            `Student ${this.name} has average ${this.getAverage()} and the grade letter is ${this.getFinalGrade()}`
        );
    }
}

let students = [];

function createStudent(name, grades) {
    students.push(new Student(name, grades));
}

function getAllStudents() {
    for (let student of students) {
        student.getInfo();
    }
}

function getStudentByName(name) {
    for (let student of students) {
        if (student.name === name) {
            student.getInfo();
            return;
        }
    }
    console.log("Student not found");
}

function deleteStudentByName(name) {
    students = students.filter(student => student.name !== name);
}

function updateStudentByName(name, grade) {
    for (let student of students) {
        if (student.name === name) {
            student.updateGrades(grade);
            return;
        }
    }
    console.log("Student not found");
}


createStudent("Ali", [90, 85, 88]);
createStudent("Sara", [70, 75, 80]);

getAllStudents();

updateStudentByName("Ali", 95);
getStudentByName("Ali");

deleteStudentByName("Sara");
getStudentByName("Sara");

getAllStudents();
