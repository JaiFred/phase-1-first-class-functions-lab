// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'] 

const returnFirstTwoDrivers = function(){
    return drivers.slice(0, 2)
}
const  returnLastTwoDrivers = function(){
    return drivers.slice(2, 4)
}

/*function returnFirstTwoDrivers(driversArray) {
    const firstTwo = (array) = driversArray.slice(0, 2);
    console.log(firstTwo);
    returnFirstTwoDrivers(driversArray)
    }*/



const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]






const createFareMultiplier = integer => {
    return (input) => input * integer;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, func) => func(arrayOfDrivers);
