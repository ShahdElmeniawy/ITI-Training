console.log("------------------task1--------------------");
interface User{
    name: string;
    age: number;
}

// const obj: User = {
//     name : "shahd",
// }

console.log("------------------task2--------------------");
interface Profile{
    username?: string;
    email?: string;
}

const obj2: Profile = {
    username : "shahdElmeniawy",
    email : "shahd@gmail.com"
}

console.log("------------------task3--------------------");

type arrows = "left" | "right" | "top" | "bottom";

function movePlayer(botton:arrows):arrows{
    return botton;
}

movePlayer("left");