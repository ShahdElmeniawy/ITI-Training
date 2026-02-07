document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("currDate").onclick = function () {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const d = new Date();
        let str = "";
        str += "Current date in format: " + days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() + "\n";
        str += "Current time in 12-hour format with AM/PM: " + d.getHours() % 12 + " : " + d.getMinutes() + " : " + d.getSeconds() + (d.getHours() > 11 ? " PM" : "AM") + "\n";
        str += "Current time in 24-hour format : " + d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds() + "\n";
        str += "The current day of the week : " + days[d.getDay()] + "\n";
        str += "Days remaining until the end of the current month : " + (30 - d.getDate());

        document.getElementById("showCurrDate").innerText = str;
    }


    document.getElementById("ageCalculator").onclick = function () {
        let birthday = prompt("Enter your birthday format (DD-MM-YYYY)");
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const d = new Date(birthday.split("-").reverse().join("-"));
        const curr = new Date();
        let str2 = "";
        let years = Math.floor((curr.getTime() - d.getTime()) / (1000 * 24 * 60 * 60 * 365.25));
        let months = Math.floor(((curr.getTime() - d.getTime()) % (1000 * 24 * 60 * 60 * 365.25)) / (1000 * 24 * 60 * 60 * 30));
        let days = Math.floor((((curr.getTime() - d.getTime()) % (1000 * 24 * 60 * 60 * 365.25)) % (1000 * 24 * 60 * 60 * 30)) / (1000 * 24 * 60 * 60));
        str2 += years + "Years, " + months + "months, " + days + "Days \n";
        str2 += daysOfWeek[d.getDay()];
        document.getElementById("showBirthDay").innerText = str2;
    }
    const curr = new Date();
    const newyear = new Date(2027, 1, 1);

    document.getElementById("coutDown").innerText = "Reminder to 2027  [" + Math.floor((newyear.getTime() - curr.getTime()) / (24 * 60 * 60 * 1000)) + " Days : " + Math.floor(((newyear.getTime() - curr.getTime()) % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) + " Hours : " + Math.floor((((newyear.getTime() - curr.getTime()) % (24 * 60 * 60 * 1000)) % (1000 * 60 * 60)) / (60000)) + " Mintes]";

});
