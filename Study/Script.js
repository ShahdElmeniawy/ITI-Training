document.getElementById("runcode").onclick = () => {
    let str = document.getElementById("inp").value;
    document.getElementById("out").innerText = map((ele) => ele * -1);

}

let str = "A13BS2ZX", ret = 1;
let myOut = str.split("").filter((element) => isNaN(element)).join("")
    + str.split("").filter((element) => !isNaN(element)).reduce((sol, element) => element * sol);
console.log(myOut);



let obj = document.querySelectorAll("li");
console.log(obj);

obj.forEach(element => {
    element.onclick = function(){
        obj.forEach(ele =>{
            ele.classList.remove("active");
        })
        const element = this.classList;
        element.add("active");

    }
});