console.log("-------------------------Task1------------------------------")

class CS_Students {
    constructor(){
        console.log("New student majoring in computer science");
    }
}

class IS_Students{
    constructor(){
        console.log("New student majoring in Information System");
    }
}

class Abstruct{
    factoryMethod(type){
    }
    operation(){
        return this.factoryMethod();
    }
}

class concrete extends Abstruct{
    factoryMethod(type){
        return (type === "CS" ? new CS_Students(): new IS_Students());
    }
}


let st1 = new concrete();
st1.factoryMethod("CS");
let st2 = new concrete();
st2.factoryMethod("IS");



console.log("-------------------------Task2------------------------------")


class SingletonClass{
    constructor(data){
        if(SingletonClass.instance){
            SingletonClass.instance.cnt++;
            return SingletonClass.instance;
        }
        this.cnt = 1;
        SingletonClass.instance = this;
        this.data = data;
    }

    getData(){
        return this.data;
    }

    getNumActiveInstane(){
        return this.cnt;
    }
}

let sc1 = new SingletonClass("Frist Singleton instance");
let sc2 = new SingletonClass("Second Singleton instance");
let sc3 = new SingletonClass("third Singleton instance");

console.log(sc3.getNumActiveInstane());
console.log(sc3.getData());


console.log("-------------------------Task3------------------------------")

class Document{
    constructor(header, footer, pages, text){
        this.header = header;
        this.footer = footer;
        this.pages = pages;
        this.text = text;
    }

    clion(){
        return new Document(this.header, this.footer, this.pages, this.text);
    }
}

let doc1 = new Document("Header", "Footer", ["page1", "page2", "page3"], "text");
let doc2 = doc1.clion();
doc2.header = "doc2Header";
console.log(doc1);
console.log(doc2);


console.log("-------------------------Task4------------------------------")


class Pizza{
    constructor(){
        this.size = null;
        this.cheese = false;
        this.pineapple = false;
        this.olives = false;
    }

}

class pizzaBuilder{
    constructor(obj){
        this.pizza = obj;
    }
    setSize(size){
        this.pizza.size = size;
    }
    chooseCheese(check){
        this.pizza.cheese = check;
    }
    choosePineapple(check){
        this.pizza.pineapple = check;
    }
    chooseOlives(check){
        this.pizza.olives = check;
    }
}



class Builder{
    buildPizza(PizzaObj){
        this.pizza = new pizzaBuilder(PizzaObj);
        this.pizza.setSize("small");
        this.pizza.chooseCheese(true);
        this.pizza.choosePineapple(true);
        this.pizza.chooseOlives(true);
    }

}

let pizza = new Pizza();
let builder = new Builder();
builder.buildPizza(pizza);
console.log(pizza);

