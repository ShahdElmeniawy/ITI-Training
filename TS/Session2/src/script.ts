// 1- Create a class BankAccount with:

//  👉🏻 A private property balance (number).

// 	👉🏻 A public method deposit that adds to the balance.

// 	👉🏻 A public method getBalance that returns the balance.

// 	Test the class by depositing some money and retrieving the balance.

class BankAccount {
    private _balance: number;
    constructor() {
        this._balance = 0;
    }
    public deposit(depositMoney: number): void {
        this._balance += depositMoney;
    }
    public getBalance(): number {
        return this._balance;
    }
}

let account1 = new BankAccount()
account1.deposit(10000);
console.log(account1.getBalance());

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// 2- Create a class Animal with:

// 	👉🏻 A protected property name (string).

// 	👉🏻 A protected method makeSound that logs a sound.

// 	👉🏻 Create a subclass Dog that extends Animal and overrides the makeSound method to log "Woof!".

// 	Test the Dog class.

class Animal {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    protected makeSound(): void {
        console.log("animal sound");
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    protected override makeSound(): void {
        console.log("Woof!");
    }

    public getSound(): void {
        this.makeSound();
    }
}

let myDog = new Dog("lilo");
myDog.getSound();


// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// 3- Create a class Person with:

// 	👉🏻 A readonly property id (number).

// 	👉🏻 A constructor that initializes id.

// 	👉🏻 Try to modify the id property after initialization and observe the error.

class Person {
    public readonly id: number;
    constructor() {
        this.id = 123;
    }
    //    public editId(){
    //         this.id = 30;
    //     }
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// 4- Create a class MathUtils with:

// 	👉🏻 A static property PI (number) set to 3.14.

// 	👉🏻 A static method calculateCircumference that takes a radius (number) and returns the circumference (2 * PI * radius).

// 	👉🏻 Test the static method.


class MathUtils {
    public static PI: number = 3.14;
    static calculateCircumference(radius: number): number {
        return 2 * radius * this.PI;
    }
}

console.log(MathUtils.calculateCircumference(3));

// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// 5- Create an abstract class Shape with:

// 	👉🏻 An abstract method calculateArea that returns a number.

// 	👉🏻 Create a subclass Circle that implements calculateArea using the formula PI * radius^2.

// 	👉🏻 Test the Circle class.

abstract class Shape {
    abstract calculateArea(): number;
}

class Circle extends Shape {
    private radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}
let myCircle = new Circle(5);
console.log(myCircle.calculateArea());


// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// 6- Create a class Temperature with:

// 	👉🏻 A private property _celsius (number).

// 	👉🏻 A getter celsius that returns _celsius.

// 	👉🏻 A setter celsius that sets _celsius but throws an error if the value is below -273.15 (absolute zero).

// 	👉🏻 Test the getter and setter.

class Temperature {
    private _celsius: number;

    constructor(initialCelsius: number = 0) {
        this.celsius = initialCelsius;
    }

    get celsius(): number {
        return this._celsius;
    }

    set celsius(value: number) {
        if (value < -273.15) {
            throw new Error("Temperature cannot be below absolute zero (-273.15°C)");
        }
        this._celsius = value;
    }
}

try {
    const temp = new Temperature(25);
    console.log(`Initial temperature: ${temp.celsius}°C`);
    temp.celsius = 30;
    console.log(`Updated temperature: ${temp.celsius}°C`);
    // temp.celsius = -300;
} catch (error) {
    console.error(error.message);
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// 7- Create a class Employee with:

//     👉🏻 A readonly property id (number).

//     👉🏻 A private property salary (number).

//     👉🏻 A protected property department (string).

//     👉🏻 A constructor that initializes all properties using parameter properties(short-hand way).

//     👉🏻 A public method getDetails that returns a string with all details.

//     👉🏻 Create a subclass Manager that extends Employee and adds a private property teamSize (number). Override getDetails to include teamSize.

//     👉🏻 Test the Manager class.

class Employee {
     constructor(
        readonly id: number,          
        private _salary: number,
        protected department: string
    ) {}
    public getDetails(): string {
        return `ID: ${this.id}, Salary: $${this._salary}, Department: ${this.department}`;
    }
}
class Manager extends Employee {
    constructor(
        id: number,
        salary: number,
        department: string,
        private teamSize: number
    ) {
        super(id, salary, department); 
    }
    override getDetails(): string {
        return `${super.getDetails()}, Team Size: ${this.teamSize}`;
    }
}

let managar = new Manager(3, 300000, "MERNteam", 8);
console.log(managar.getDetails());
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// 8- Create a generic class Box that can store any type of value. Add methods:

//     👉🏻 setValue to set the value.

//     👉🏻 getValue to get the value.

//     👉🏻 Test the class with different types (e.g., string, number).


class Box<T>{
    private value:T;
    set(value:T):void{
        this.value = value;
    }

    get():T{
        return this.value;
    }
}

// let num = new Box<number>;
// num.set(1);
// console.log(num.get());
// let str = new Box<string>;
// str.set("Shahd");
// console.log(str.get());


// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// 9- 👉🏻  Write a generic function identity that takes an argument of any type and returns the same value. Test it with a number, string, and boolean.

function identity<T>(arg: T): T {
    return arg;
}

let num = identity(42);
console.log(num);
let str = identity("Shahd Elmeniawy");
console.log(str);
let checker = identity(true);
console.log(checker);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// 10- 👉🏻 Use Record to create an object where keys are "red", "green", and "blue", and values are their corresponding hex color codes (strings).
//    Test by accessing the red key.

type colors = Record<"red"|"blue"|"green", string>;

let mainColors:colors = {
    red:'#FF0000',
    green:'#00FF00',
    blue:'#0000FF'
}

console.log(mainColors.red);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------
