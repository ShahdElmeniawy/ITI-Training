function withifcondition(AQI, PM2, ozone) {
    if (AQI < 50 && PM2 < 35) console.log("Good Air     ");
    else if (AQI > 50 && AQI <= 100 && PM2 > 35 && PM2 <= 75) console.log("Moderate    ");
    else if (AQI > 100 && PM2 > 75) console.log("Unhealthy      ");
    else console.log("Data Inconsisten    ");

    if (ozone >= 0 && ozone <= 50) console.log("Good");
    else if (ozone >= 51 && ozone <= 100) console.log("Moderate");
    else if (ozone >= 101 && ozone <= 150) console.log("Unhealthy for Sensitive Groups");
    else if (ozone >= 151 && ozone <= 200) console.log("Unhealthy");
    else if (ozone >= 201 && ozone <= 300) console.log("Very Unhealthy");
    else if (ozone >= 300) console.log("Hazardous");
    else console.log("Data Inconsisten")

}

function withTirnaryOp(AQI, PM2, ozone) {
    console.log((AQI < 50 && PM2 < 35 ? "Good Air     " : (AQI > 50 && AQI <= 100 && PM2 > 35 && PM2 <= 75 ? "Moderate    " : (AQI > 100 && PM2 > 75 ? "Unhealthy      " : "Data Inconsisten    "))));
    console.log((ozone >= 0 && ozone <= 50 ? "Good" : (ozone >= 51 && ozone <= 100 ? "Moderate" : (ozone >= 101 && ozone <= 150 ? "Unhealthy for Sensitive Groups" : (ozone >= 151 && ozone <= 200 ? "Unhealthy" : (ozone >= 201 && ozone <= 300 ? "Very Unhealthy" : (ozone >= 300 ? "Hazardous" : "Data Inconsisten")))))));

}

let frist = prompt("Enter AQI"), second = prompt("Enter PM2.5"), third = prompt("Enter Ozone");
withifcondition(frist, second, third);
withTirnaryOp(frist, second, third);

