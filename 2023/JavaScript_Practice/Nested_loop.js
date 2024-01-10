let rows = window.prompt("enter number of rows");
let columns = window.prompt("enter number of columns");

// outter in charge of rows
for (let i = 1; i <= rows; i++) {
  //inner in charge of columns
  for (let j = 1; j <= columns; j++) {
    console.log(j);
  }
}
