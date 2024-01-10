//call back
//a function passed as an argument to another function
//ensures a function will not run until a task is completed
//helps develop asynchronous code which helps to avoid errors and potential rpblems
sum(2, 3, displayConsole);

function sum(x, y, callBack) {
  let result = x + y;
  callBack(result);
  //passing result as an argument so it displays it
}

function displayConsole(output) {
  console.log(output);
}

function displayDOM(output) {
  document.getElementById("myLabel").innerHTML = output;
}
