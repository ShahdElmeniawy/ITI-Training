console.log("-------------------------TASK1--------------------------------");
console.log();

let replaceObj = {
    [Symbol.replace](str) {
        return (str.length > 15 ? str.substr(0, 15) + "..." : str);
    }
}

console.log("Shahd Mohmed".replace(replaceObj));
console.log("Shahd Mohmed ELSayed".replace(replaceObj));

console.log();
console.log("-------------------------TASK2--------------------------------");
console.log();


let obj = {
    uName: "Shahd",
    uAge: 23,
    uFavoriteColor: "black",
    uMajor: "CS",
    [Symbol.iterator]() {
        let keys = Object.keys(obj), cnt = 0;
        return {
            next: () => {
                return (cnt < keys.length ? { value: [keys[cnt], obj[keys[cnt++]]], done: false }
                    : { value: [undefined, undefined], done: true });
            }
        }
    }
}

for (let [key, value] of obj) console.log(key, value);



console.log();
console.log("-------------------------TASK3--------------------------------");
console.log();


let generatorObj = {
    uName: "Shahd",
    uAge: 23,
    uFavoriteColor: "black",
    uMajor: "CS",
    [Symbol.iterator]: function*() {
        let entries = Object.entries(generatorObj);
        for (let entry of entries) yield entry;
    }
}

for (let element of generatorObj) {
    console.log(...element);
}
