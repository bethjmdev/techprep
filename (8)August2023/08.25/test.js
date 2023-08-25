var isValid = function () {
  let s = "()[]{}";
  // let s = "(]"

  //insert spaces every 2 spots
  //split into ind arrays
  //test if each is () || [] || {}

  s = s.split("");

  for (let i = 0; i < s.length + 1; i++) {
    let newS = newS.push(s.splice(0, 2));
    i += 1;
  }

  return newS, s;
};

isValid();
