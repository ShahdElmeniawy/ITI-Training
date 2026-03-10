console.log("-------------------------Task1------------------------------")
class teacher{
    constructor(name){
        this.name = name;
    }
    display(){
        console.log(this.name);
    }
}

class newTeacher{
    constructor(obj, salary, nationality, street){
        this.name = obj.name;
        this.nationality = nationality;
        this.salary = salary;
        this.street = street;
    }
    display(){
        console.log(this.name, this.salary, this.nationality, this.street);
    }
}

let teacher1 = new teacher("Wagdy");
teacher1.display();
let newTeacher1 = new newTeacher(teacher1, 20000, "Egyption", "kahled abn Alwalid street");
newTeacher1.display();


console.log("-------------------------Task2------------------------------")


class counteries {
    
}