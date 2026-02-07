let students = [
    { name: "Ahmed Ali", degree: 87, major: "CS" },
    { name: "Fatma Hassan", degree: 92, major: "IT" },
    { name: "Omar Khalad", degree: 45, major: "CS" },
    { name: "Layla Mohamed", degree: 78, major: "IS" },
    { name: "Yousef Ibrahim", degree: 56, major: "IT" },
    { name: "Nour Ahmed", degree: 95, major: "CS" },
];

// Search Operations

console.log(students.find(students => students.degree >= 90 && students.degree <= 100).name);
console.log(students.filter(students => students.degree > 80 && students.major == "CS").map(students => students.name));
let studentname = prompt("Enter Name to search");
console.log(students.find(student => student.name.toLowerCase() == studentname.toLowerCase()).name);


// Display Operations

console.log(students.filter(student => student.degree < 60).map(student => student.name));
console.log("-------------------------------");
students.sort(function (a, b) { return a.name > b.name ? -1 : (a.name == b.name ? 0 : 1) });
for (student of students) {
    console.log(student.name + " " + student.degree + " " + student.major);
}

console.log("-------------------------------");
students.sort(function (a, b) { return b.degree - a.degree });

for (student of students) {
    console.log(student.name + " " + student.degree + " " + student.major);
}


//  Modification Operations
console.log("-------------------------------");

students.push({ name: "Shahd ElMeniawy", degree: "90", major: "CS" });
console.log(students[students.length - 1].name + " " + students[students.length - 1].degree + " " + students[students.length - 1].major);
students.pop();

console.log("-------------------------------");


students.splice(2, 0, { name: "Shahd ElMeniawy", degree: "90", major: "CS" }, { name: "Sohila ElSherif", degree: "90", major: "CS" });
for (student of students) {
    console.log(student.name + " " + student.degree + " " + student.major);
}



console.log("-------------------------------");


students.splice(3, 1);
for (student of students) {
    console.log(student.name + " " + student.degree + " " + student.major);
}


//  Iteration Demonstrations

for (student in students) console.log(student + " " + students[student].name);
console.log("-------------------------------");
for (student of students) console.log(student.name + " " + student.degree + " " + student.major);


// Advanced Statistics


let csAvg = 0, itAvg = 0, isAvag = 0;
csAvg = students.filter(student => student.major == "CS").map(student => parseInt(student.degree)).reduce((a, b) => a + b, 0);
csAvg /= students.filter(student => student.major == "CS").length;
console.log(csAvg);
console.log(students.filter(student => student.major == "CS").length);

isAvg = students.filter(student => student.major == "IS").map(student => parseInt(student.degree)).reduce((a, b) => a + b, 0);
isAvg /= students.filter(student => student.major == "IS").length;
console.log(isAvg);
console.log(students.filter(student => student.major == "IS").length);

itAvg = students.filter(student => student.major == "IT").map(student => parseInt(student.degree)).reduce((a, b) => a + b, 0);
itAvg /= students.filter(student => student.major == "IT").length;
console.log(itAvg);
console.log(students.filter(student => student.major == "IT").length);

