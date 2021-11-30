const humanCatDogYears = number => {
   const arr = [];
    if (number === 1 ){
       arr.push(1, 15, 15)}
    else if (number === 2){
        arr.push(2, 24, 24)}
    else {
        let catYears = ((number-2)*4)+24;
        let dogYears = ((number-2)*5)+24;
        arr.push(number, catYears, dogYears)
    };
    return arr
   };

module.exports = humanCatDogYears;
