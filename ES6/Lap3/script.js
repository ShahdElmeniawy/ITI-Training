console.log("-------------------------TASK1--------------------------------");
console.log();

class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    area() {
        return 0;
    }

    clearCanvas() {
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return ctx;
    }
}

class Square extends Polygon {
    constructor(side) {
        super(4);
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }

    draw() {
        const ctx = this.clearCanvas();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 3;
        ctx.strokeRect(200, 50, this.side, this.side);
    }
}

class Rectangle extends Polygon {
    constructor(height, width) {
        super(4);
        this.height = height;
        this.width = width;
    }

    area() {
        return this.width * this.height;
    }

    draw() {
        const ctx = this.clearCanvas();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 3;
        ctx.strokeRect(200, 50, this.width, this.height);
    }
}

class Circle extends Polygon {
    constructor(radius) {
        super(0);
        this.radius = radius;
    }

    area() {
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
    }

    draw() {
        const ctx = this.clearCanvas();
        ctx.beginPath();
        ctx.arc(250, 200, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "red";
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.closePath();
    }
}

class Triangle extends Polygon {
    constructor(height, width) {
        super(3);
        this.height = height;
        this.width = width;
    }

    area() {
        return 0.5 * this.height * this.width;
    }

    draw() {
        const ctx = this.clearCanvas();
        ctx.beginPath();
        ctx.moveTo(100, 200);
        ctx.lineTo(100 + this.width, 200);
        ctx.lineTo(100, 200 - this.height);
        ctx.closePath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 3;
        ctx.stroke();
    }
}

let shape = document.getElementById("polygon");
let shapeArea = document.getElementById("shapeArea");

shape.addEventListener("change", function () {
    let selectedShape;

    if (shape.value === "sq") {
        selectedShape = new Square(100);
    } else if (shape.value === "rc") {
        selectedShape = new Rectangle(100, 200);
    } else if (shape.value === "cr") {
        selectedShape = new Circle(80);
    } else if (shape.value === "tr") {
        selectedShape = new Triangle(100, 120);
    }

    if (selectedShape) {
        selectedShape.draw();
        shapeArea.innerHTML = selectedShape.area();
    }
});

console.log();
console.log("-------------------------TASK2--------------------------------");
console.log();


let handler={
    set(target, prop, value){
        if(prop == "name"){
            if(typeof value !== "string" || value.length !== 7){
                throw new Error("Name Must be a String of 7 characters")
            }
        }else if(prop == "address"){
            if(typeof value != "string"){
                throw new Error("Address Must be a String ONLY");
            }

        }else if(prop == "age"){
            if(typeof value != "number" || value < 25 || value > 60){
                throw new Error("Age Must be a Number between 25 and 60");
            }
        }else{
            throw new Error("Prop Not allowed");
        }
        target[prop] = value;
        return true;
    }
}


let obj = new Proxy({}, handler);

obj["name"] = "shahd.m";
obj["age"] = 30;
obj["address"] = "ELFayoum";

// obj["major"] ="cs";
// obj["name"] = 20;
// obj["name"] = "shahd";
// obj["age"] = 10;
// obj["age"] = "twenty three";
// obj["address"] = 300;
console.log(obj);