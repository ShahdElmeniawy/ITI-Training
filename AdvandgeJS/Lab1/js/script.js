let elements = ["Salad", "Pasta", "Beef", "Pizza"];
let navBar = document.getElementById("navBarList");
for (let item of elements) {
    let li = document.createElement("li");
    li.id = li.textContent = item
    navBar.appendChild(li);
}
let myReq = new XMLHttpRequest();
getData("salad");


function getData(element) {
    let loader = document.getElementById("loader");
    loader.style.display = "block";
    myReq.open(
        "GET",
        `https://forkify-api.jonas.io/api/v2/recipes?search=${element.toLowerCase()}`
    );
    myReq.send();
}


elements.forEach(element => {
    document.getElementById(element).addEventListener("click", () => getData(element));

});


myReq.addEventListener("readystatechange", function () {
    if (myReq.readyState === 4) {
        loader.style.display = "none";
        if (myReq.status == 200) {
            let myData = JSON.parse(myReq.response);
            display(myData.data.recipes);
        }
    }
})

function display(list) {
    let countiner = "";
    for (let item of list) {
        countiner += `
        <div class = "card">
            <img src=${item.image_url}>
            <div>
            <h1>${item.title}</h1>
            <p>${item.publisher}<p>
            </div>
        </div>
        `
    }
    document.getElementById("container").innerHTML = countiner;
}
