class Employee {
    #salary;
    static payroll = 0;

    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
        Employee.payroll += salary;
    }

    setSalary(newSalary) {
        Employee.payroll -= this.#salary;
        this.#salary = newSalary;
        Employee.payroll += newSalary;
    }

    getSalary() {
        return this.#salary;
    }

    getAnnualSalary() {
        return this.#salary * 12;
    }

    getInfo() {
        console.log(`${this.name}, salary: ${this.#salary}`);
    }
}

class Manager extends Employee {
    #bonus;

    constructor(name, salary, bonus = 0) {
        super(name, salary);
        this.#bonus = bonus;
    }

    setBonus(value) {
        this.#bonus = value;
    }

    getAnnualSalary() {
        return super.getAnnualSalary() + this.#bonus;
    }
}

let employees = [];

function createEmployee(name, salary, status) {
    if (status === "Manager")
        employees.push(new Manager(name, salary));
    else
        employees.push(new Employee(name, salary));
}

function allEmployees() {
    for (let employee of employees)
        employee.getInfo();
}

function updateSalary(name, newSalary) {
    for (let employee of employees) {
        if (employee.name === name) {
            employee.setSalary(newSalary);
            return;
        }
    }
    console.log("Employee not found");
}


function updateBonus(name, bonus) {
    for (let employee of employees) {
        if (employee.name === name) {
            employee.setBonus(bonus);
            return;
        }
    }
    console.log("Employee not found");
}

function deleteEmployee(name) {
    employees = employees.filter(emp => emp.name !== name);
}



createEmployee("Ali", 50000, "Employee");
createEmployee("Sara", 80000, "Manager");

updateBonus("Sara", 2000)

allEmployees();

console.log(Employee.payroll);
