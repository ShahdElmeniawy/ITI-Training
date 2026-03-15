// 1- Create a class BankAccount with:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//  👉🏻 A private property balance (number).
// 	👉🏻 A public method deposit that adds to the balance.
// 	👉🏻 A public method getBalance that returns the balance.
// 	Test the class by depositing some money and retrieving the balance.
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this._balance = 0;
    }
    BankAccount.prototype.deposit = function (depositMoney) {
        this._balance += depositMoney;
    };
    BankAccount.prototype.getBalance = function () {
        return this._balance;
    };
    return BankAccount;
}());
var account1 = new BankAccount();
account1.deposit(10000);
console.log(account1.getBalance());
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// 2- Create a class Animal with:
// 	👉🏻 A protected property name (string).
// 	👉🏻 A protected method makeSound that logs a sound.
// 	👉🏻 Create a subclass Dog that extends Animal and overrides the makeSound method to log "Woof!".
// 	Test the Dog class.
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("animal sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Woof!");
    };
    Dog.prototype.getSound = function () {
        this.makeSound();
    };
    return Dog;
}(Animal));
var myDog = new Dog("lilo");
myDog.getSound();
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// 3- Create a class Person with:
// 	👉🏻 A readonly property id (number).
// 	👉🏻 A constructor that initializes id.
// 	👉🏻 Try to modify the id property after initialization and observe the error.
var Person = /** @class */ (function () {
    function Person() {
        this.id = 123;
    }
    return Person;
}());
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// 4- Create a class MathUtils with:
// 	👉🏻 A static property PI (number) set to 3.14.
// 	👉🏻 A static method calculateCircumference that takes a radius (number) and returns the circumference (2 * PI * radius).
// 	👉🏻 Test the static method.
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.calculateCircumference = function (radius) {
        return 2 * radius * this.PI;
    };
    MathUtils.PI = 3.14;
    return MathUtils;
}());
console.log(MathUtils.calculateCircumference(3));
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// 5- Create an abstract class Shape with:
// 	👉🏻 An abstract method calculateArea that returns a number.
// 	👉🏻 Create a subclass Circle that implements calculateArea using the formula PI * radius^2.
// 	👉🏻 Test the Circle class.
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(Shape));
var myCircle = new Circle(5);
console.log(myCircle.calculateArea());
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// 6- Create a class Temperature with:
// 	👉🏻 A private property _celsius (number).
// 	👉🏻 A getter celsius that returns _celsius.
// 	👉🏻 A setter celsius that sets _celsius but throws an error if the value is below -273.15 (absolute zero).
// 	👉🏻 Test the getter and setter.
var Temperature = /** @class */ (function () {
    function Temperature(initialCelsius) {
        if (initialCelsius === void 0) { initialCelsius = 0; }
        this.celsius = initialCelsius;
    }
    Object.defineProperty(Temperature.prototype, "celsius", {
        get: function () {
            return this._celsius;
        },
        set: function (value) {
            if (value < -273.15) {
                throw new Error("Temperature cannot be below absolute zero (-273.15°C)");
            }
            this._celsius = value;
        },
        enumerable: false,
        configurable: true
    });
    return Temperature;
}());
try {
    var temp = new Temperature(25);
    console.log("Initial temperature: ".concat(temp.celsius, "\u00B0C"));
    temp.celsius = 30;
    console.log("Updated temperature: ".concat(temp.celsius, "\u00B0C"));
    // temp.celsius = -300;
}
catch (error) {
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
var Employee = /** @class */ (function () {
    function Employee(id, _salary, department) {
        this.id = id;
        this._salary = _salary;
        this.department = department;
    }
    Employee.prototype.getDetails = function () {
        return "ID: ".concat(this.id, ", Salary: $").concat(this._salary, ", Department: ").concat(this.department);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, salary, department, teamSize) {
        var _this = _super.call(this, id, salary, department) || this;
        _this.teamSize = teamSize;
        return _this;
    }
    Manager.prototype.getDetails = function () {
        return "".concat(_super.prototype.getDetails.call(this), ", Team Size: ").concat(this.teamSize);
    };
    return Manager;
}(Employee));
var managar = new Manager(3, 300000, "MERNteam", 8);
console.log(managar.getDetails());
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// 8- Create a generic class Box that can store any type of value. Add methods:
//     👉🏻 setValue to set the value.
//     👉🏻 getValue to get the value.
//     👉🏻 Test the class with different types (e.g., string, number).
var Box = /** @class */ (function () {
    function Box() {
    }
    Box.prototype.set = function (value) {
        this.value = value;
    };
    Box.prototype.get = function () {
        return this.value;
    };
    return Box;
}());
// let num = new Box<number>;
// num.set(1);
// console.log(num.get());
// let str = new Box<string>;
// str.set("Shahd");
// console.log(str.get());
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// 9- 👉🏻  Write a generic function identity that takes an argument of any type and returns the same value. Test it with a number, string, and boolean.
function identity(arg) {
    return arg;
}
var num = identity(42);
console.log(num);
var str = identity("Shahd Elmeniawy");
console.log(str);
var checker = identity(true);
console.log(checker);
var mainColors = {
    red: '#FF0000',
    green: '#00FF00',
    blue: '#0000FF'
};
console.log(mainColors.red);
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
