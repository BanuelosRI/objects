//STORY 1
//Purpose: 1.) Create a function that creates car objects which have a make, model year, and color.
// 2.) Add a function that returns make, model year, and color as one string and use the method to tell the user the car's information.
// 3.) Write a function that creates an object that represents a car with the following properties:
// model year
// make
// color
// 4.)Add a function to the object that is being returned that contatenates the make, year and color.
//Signature: Object with function and method.
// //Example: var person = {
//   name: "Alex Keaton",
//   phone: 123456789,
//   getData: function() { return this.name+"-"+this.phone }
// };
//
// person.getData();   -> "Alex Keaton-123456789"
//

function newCar(modelyear, make, color) {
  return {
    modelyear: modelyear,
    make: make,
    color: color,
    carInfo: function() {
      return this.modelyear + "-" + this.make + "-" + this.color
    }
    };
  }
// To run this first function create a "var" with agrument  Example : var caro = newCar(1999, "BMW", "Blue");
// Then you can call the var ( var.make) to get the make.
// Or call the var (var.function name)to run the function that is inside the function.
// caro.modelyear;, caro.make;, caro.color; ==>  will appear by modelyear,make,color in single


//STORY 2
//Purpose: 1.)The car can accelerate, brake, and tell you its speed.
// 2.) Add a speed variable to the closure of the car object.
// 3.)Add the following functions to the object:
// getSpeed: returns current speed
// accelerate: increases the speed by 10mph (but does not return anything)
// brake: decreases the speed by 7mph (but does not return anything)
// Signature :
// Example:

function newCar(modelyear, make, color) {
  var speed = 10;
  return {
    modelyear: modelyear,
    make: make,
    color: color,
    carInfo: function() {
      return this.modelyear + "-" + this.make + "-" + this.color;
    },
    getSpeed: function() {
      return speed;
    },
    accelerate: function() {
      speed += 10;
    },
    brake: function() {
      speed -= 7;
    }
    };
  }

// Story 3
// create object, then a loop that takes car to and including 50 and no further. Then back to 0.
//Signature : while loop

function newCar(modelYear, Make, Color) {
  var speed = 0;
  return {
    modelyear: modelYear,
    make: Make,
    color: Color,
    carInfo: function() {
      return this.modelyear + "-" + this.make + "-" + this.color;
    },
    getSpeed: function() {
      return speed;
    },
    accelerate: function() {
      speed += 5;
    },
    brake: function() {
      speed -= 1;
    },

    };
  }

var car34 = newCar(1999, "Honda", "Blue");
// this was possible becasue we had previously created the newCar creator object.
while (car34.getSpeed() < 70) {
  car34.accelerate();
  console.log(car34.getSpeed());
};

while (car34.getSpeed() > Math.abs(0)) {
  car34.brake();
  console.log(car34.getSpeed());
};

//story 4
//Purpose: Limit the car's maximum speed to 85mph.
//Signature: If statement and add var for comparison
//Example:


function newCar(modelYear, Make, Color) {
  var speed = 0;
  var topSpeed = 85;
  return {
    modelyear: modelYear,
    make: Make,
    color: Color,
    carInfo: function() {
      return this.modelyear + "-" + this.make + "-" + this.color;
    },
    getSpeed: function() {
      return speed;
    },
    accelerate: function() {
      speed += 5;

      if (speed >= topSpeed) {
      speed = 85;
      console.log("You are going to fast!");
      }
    },
    brake: function() {
      speed -= 1;
    },

    };
  }

var car34 = newCar(1999, "Honda", "Blue");

  while (car34.getSpeed() < 85) {
    car34.accelerate();
    console.log(car34.getSpeed());
  };

// story 5
// Purpose: make the brake change the speed by a random amount with a maximum of minus 1/2 of the current speed.


function newCar(modelYear, Make, Color) {
  var speed = 0;
  var decSpeed;
  var newSpeed;
  var randNum = Math.floor((Math.random() * 10) + 1);
  //will select arandom number between 1 - 10
  return {
    modelyear: modelYear,
    make: Make,
    color: Color,
    carInfo: function() {
      return this.modelyear + "-" + this.make + "-" + this.color;
    },
    getSpeed: function() {
      return speed;
    },
    accelerate: function() {
      speed += 5;
    },
    brake: function() {
      newSpeed = speed + randNum;
      decSpeed = (speed / 2);
      return console.log(newSpeed);
    },
    brakeSpeed: function(){
      speed = newSpeed - decSpeed;
      return console.log(randNum, decSpeed);
    }
  };
}

var car34 = newCar(1999, "Honda", "Blue");

while (car34.getSpeed() < 25) {
  car34.accelerate();
  console.log(car34.getSpeed());
};
