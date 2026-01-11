"use strict";

let humidity = prompt("Enter humidity percentage");
let wind = prompt("Enter Wind Speed");
let str = (humidity < 30 ? "Very Dry " : (humidity >= 30 && humidity < 60 ? "Comfortable " : "Humid "));
str += (humidity < 60 && wind < 20 ? "Pleasant and " : (humidity > 60 && wind > 20 ? "and Stormy" : "and Data is not enough to give you infomation about Wind"));
alert(str);
