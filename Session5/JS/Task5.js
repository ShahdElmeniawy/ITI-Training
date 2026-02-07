let grades = [78, 95, 45, 32, 88, 100, 55, 73, 91, 18, 67, 82];

//  Basic Operations
grades.sort(function (a, b) { return b - a });
for (it of grades) console.log(it);

console.log(grades.find(grade => grade <= 100));

console.log(grades.findLast(grade => grade <= 100));

console.log((grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2));

//  Filtering Operations

console.log(grades.filter(grade => grade < 60));

console.log(grades.filter(grade => grade >= 90));

console.log(grades.filter(grade => grade >= 60).length);

// Grade Categories
function gradeCategories() {
    console.log("Excellent  " + grades.filter(grade => 90 <= grade && grade <= 100).length);
    console.log("Excellent  " + grades.filter(grade => 90 <= grade && grade <= 100));

    console.log("Very Good " + grades.filter(grade => 80 <= grade && grade <= 89).length);
    console.log("Very Good " + grades.filter(grade => 80 <= grade && grade <= 89));

    console.log("Good " + grades.filter(grade => 70 <= grade && grade <= 79).length);
    console.log("Good " + grades.filter(grade => 70 <= grade && grade <= 79));

    console.log("Pass " + grades.filter(grade => 60 <= grade && grade <= 69).length);
    console.log("Pass " + grades.filter(grade => 60 <= grade && grade <= 69));

    console.log("Fail " + grades.filter(grade => grade <= 60).length);
    console.log("Fail " + grades.filter(grade => grade <= 60));
}

gradeCategories();


//Grade Adjustment
document.getElementById("curve").onclick = function () {
    for (i in grades) {
        if (grades[i] < 60) {
            grades[i] += 5;
        }
        if (grades[i] > 100) {
            grades[i] = 100;
        }
    }
    document.getElementById("box").innerText = grades.join("\n");
}

