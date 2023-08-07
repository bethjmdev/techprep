// object = a group of properties and methods
// properties = what an object Headersmethods = what an object can do
// use . to access properties and methods

const car = {
  model: "Mustang",
  color: "red",
  year: 2023,

  drive: function () {
    console.log("You drive the car");
  },

  break: function () {
    console.log("You step the breaks");
  },
};

console.log(car.model);
car.drive();
//envokes the method
