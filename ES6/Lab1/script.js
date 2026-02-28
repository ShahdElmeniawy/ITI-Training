console.log("-------------------------TASK1--------------------------------");
console.log();


let x = 4, y = 5;
[y, x] = [x, y];
console.log(x, y);


console.log();
console.log("-------------------------TASK2--------------------------------");
console.log();


function maxAndMin(...elements) {
    return [`Max Element is ${Math.max(...elements)}  `, `Min Element is ${Math.min(...elements)}`];
}

console.log(...maxAndMin(1, 4, -2, 6, 7, 8, 5));



console.log();
console.log("-------------------------TASK3--------------------------------");
console.log();



let arr = ["apples", "bananas", "oranges", "strawberries", "mangoes", "Cherries"];

console.log(arr.every(ele => typeof ele === "string"));

console.log("            ---------------------------------------             ");

console.log(arr.some(ele => ele.at(0) == 'a'));

console.log("            ---------------------------------------             ");

console.log(...arr.filter(element => (element.at(0) == 'a' || element.at(0) == 'b')));

console.log("            ---------------------------------------             ");

arr.map(element => `I Like ${element}`).forEach(ele => console.log(ele));




console.log();
console.log("-------------------------TASK4--------------------------------");
console.log();


function generateFunction(curObj) {
    let defualtObj = ["courseName", "courseDuration", "courseOwner"];
    defualtObj.forEach(element => {
        if (!curObj.hasOwnProperty(element)) {
            throw new Error(`Missing: ${element}`);
        }
    })
    Object.keys(curObj).forEach(element => {
        if (!defualtObj.includes(element)) {
            throw new Error(`Invalid: ${element}`);
        }
    })

    console.log(`Name: ${curObj.courseName}`);
    console.log(`Duration: ${curObj.courseDuration}`);
    console.log(`Owner: ${curObj.courseOwner}`);
}

generateFunction({
    courseName: "JavaScript",
    courseDuration: "3Days",
    courseOwner: "ITI"
});


// generateFunction({
//     courseName: "JavaScript",
//     courseOwner: "ITI"
// });

generateFunction({
    courseName: "JavaScript",
    courseDuration: "3Days",
    courseOwner: "ITI",
    studentName: "Shahd"
});
