(par)=>{

}




function cal(num, checker = (num) => {
    if (num % 2 == 0) return true;
    else return false;
}) {
    if (checker(num)) num /= 2;
    else num *= 3;
    return num;
}

console.log(cal(9));