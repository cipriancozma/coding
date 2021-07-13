const bills = [125, 555, 44];


const calcTip = (billValue) => {
    let tip = 0;
    if(billValue >= 50 && billValue <= 300) {
        tip = 0.15 * billValue;
    } else {
        tip = 0.2 * billValue;
    }

    return tip;
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];

console.log(tips);
console.log(total);
