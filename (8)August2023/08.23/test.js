function josephus() {
  let k = 5;
  let items = [2, 3, 4, 5, 6, 7, 8, 9, 1];

  let pigPen = [];

  while (items.length > 0) {
    for (let i = 1; i < items.length; i + k) {
      pigPen.push(items[i]);
      items.splice(i, 1);

      i += 1;
    }
  }
  return pigPen;
}

josephus();

///missing when there is a double zero
//need to do something to adjust the positioning of i after the thing is spiced
