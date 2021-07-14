

const printForecast = (arr) => {
    let str = "";
    for(let i = 0; i < arr.length; i++) {

        str += `...${arr[i]} degrees in ${i + 1} days`;
    }
    return str;
}


const forecastOne = printForecast([17, 21, 23]);
console.log(forecastOne);
// const forecastTwo = printForecast([12, 15, -5, 0, 4]);