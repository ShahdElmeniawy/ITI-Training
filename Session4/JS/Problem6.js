let grade = prompt("Enter Your Grade");
switch (grade) {
    case 'A':
        console.log("Eligible for Advanced Programming Course");
        break;
    case 'a':
        console.log("Eligible for Advanced Programming Course");
        break;
    case 'B':
        console.log("Eligible for Standard Programming Course");
        break;
    case 'b':
        console.log("Eligible for Standard Programming Course");
        break;
    case 'C':
        console.log("Eligible for Beginner Programming Course");
        break;
    case 'c':
        console.log("Eligible for Beginner Programming Course");
        break;
    case 'D':
        console.log("Must take Prerequisite Course first");
        break;
    case 'd':
        console.log("Must take Prerequisite Course first");
        break;
    default:
        console.log("Invalid grade entered")
}