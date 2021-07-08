
const averageScore = (num1, num2, num3) => {
    const average = (num1 + num2 + num3) / 3;
    return average;
}

const teamDolphins = averageScore(97, 112, 101);
const teamKoalas = averageScore(109, 95, 123);

if(teamDolphins > teamKoalas && teamDolphins > 100) {
    console.log("Dolphins win!")
} else if(teamKoalas > teamDolphins && teamKoalas > 100) {
    console.log("Koalas win!")
} else if(teamKoalas > 100 && teamDolphins > 100 && teamDolphins === teamKoalas) {
    console.log("There is a draw");
}

// if(teamDolphins > teamKoalas) {
//     console.log("Dolphins win!")
// } else if(teamKoalas === teamDolphins) {
//     console.log("There is a draw");
// } else {
//     console.log("Koalas win!")
// }