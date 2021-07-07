
const calculateBMI = (mass, height) => {

    const BMI = mass / (height * height);
    return BMI;
}

const bmiMark = calculateBMI(78, 1.69);
const bmiJohn = calculateBMI(92, 1.95);

// const bmiMark2 = calculateBMI(95, 1.88);
// const bmiJohn2 = calculateBMI(85, 1.76);

const markHigherBMI = bmiMark > bmiJohn;
// const markHigherBMI2 = bmiMark2 > bmiJohn2;

if(markHigherBMI) {
    console.log(`Mark's BMI is higher tha John's!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
}
