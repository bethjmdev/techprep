// returns a value back to the place where you invoked the function

let area;
let width;
let height;

width = "enter width";
height = "enter height";

area = getArea(width, height);

console.log("the area is", area);

const getArea = (width, height) => {
  let result = width * height;
  return result;
};
