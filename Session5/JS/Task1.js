document.addEventListener("DOMContentLoaded", function () {

    const quotes = [
        "Learning to code is learning how to think logically and solve problems",
        "Programming is not about typing fast but about thinking clearly",
        "Every bug you fix makes you a better developer",
        "Code is like humor, when you have to explain it, it is bad",
        "Practice programming every day to sharpen your skills",
        "Debugging teaches patience more than any tutorial",
        "A good programmer writes code that humans can understand",
        "Mistakes are proof that you are learning something new",
        "Programming turns complex problems into simple solutions",
        "The best way to learn coding is by building real projects",
        "Clean code always saves time in the long run",
        "Learning never stops in the world of technology"
    ];
    let favourites = [], curr = 0;
    favourites.length = 15;
    document.getElementById("inspired").onclick = function () {
        let index = Math.floor(Math.random() * quotes.length);
        curr = index;
        document.getElementById("qoute").innerHTML = quotes[index];
        let numVowels = 0;
        for (i of quotes[index]) {
            if ("aeiouAEOUI".includes(i)) numVowels++;
        }
        document.getElementById("statistics").innerText =
            "Total characters: " + quotes[index].length +
            "\nWord count: " + quotes[index].split(" ").length +
            "\nNumber of vowels: " + numVowels;
    };


    document.getElementById("addqoute").onclick = function () {
        favourites[curr] = 1;
    };

    document.getElementById("showfavourites").onclick = function () {
        let str = "";
        for (let i = 0; i < 15; i++) {
            if (favourites[i] == 1) {
                str += quotes[i] + "\n";
            }
        }
        console.log(str);
        document.getElementById("favouritesqoutes").innerText = str;
    }

});