const sensorsTemp = [-3, -4, -2, 4, 5, 'error', 7, 2, 1, 3, 4];

const calcTempAmplitude = (temps) => {
    let max  = temps[0];
    let min = temps[0];

    for(let i = 0; i < temps.length; i++){
        if(typeof temps[i] !== 'number') continue;
        //Find max value in the sensors array
        if(temps[i] > max) {
            max = temps[i];
        }

        //Find min value in the sensors array
        if(temps[i] < min) {
            min = temps[i];
        }
    }
    return max - min;
}

const amplitude = calcTempAmplitude(sensorsTemp)
console.log(amplitude)