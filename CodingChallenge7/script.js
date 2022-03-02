'use strict';

const markMiller = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function (mass, height){
        return this.mass / (this.height**2);
    }
}

const johnSmith ={
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function (mass, height){
        return this.mass / (this.height**2);
    }
}

if (markMiller.calcBMI() > johnSmith.calcBMI()){
    console.log(`${markMiller.firstName} has an higher BMI than ${johnSmith.firstName} with a BMI of ${markMiller.calcBMI()} vs ${johnSmith.calcBMI()}`);
}else{
    console.log(`${johnSmith.firstName} has an higher BMI than ${markMiller} with a BMI of ${johnSmith.calcBMI()} vs ${markMiller.calcBMI()}`);
}

