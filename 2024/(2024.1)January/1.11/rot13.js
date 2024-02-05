function rot13(message) {
  let newMessage = [];

  for (let i = 0; i < message.length; i++) {
    let findChar = message.charCodeAt(i);
    console.log("-------------------------------");
    console.log("find Char", findChar, message[i]);

    if (findChar >= 65 && findChar <= 90) {
      newChar = findChar + 13;
      console.log("FIND CHAR", findChar, "PLUS 13", newChar);
      if (newChar > 90) {
        console.log("entering greater than 90");
        let difference = newChar - 90 + 64;
        console.log(
          "String.fromCharCode 65-90|",
          String.fromCharCode(difference)
        );
        newMessage.push(String.fromCharCode(difference));
      } else {
        console.log("String.fromCharCode 65-90|", String.fromCharCode(newChar));
        newMessage.push(String.fromCharCode(newChar));
      }
    } else if (findChar >= 97 && findChar <= 122) {
      newChar = findChar + 13;
      console.log("NEW CHAR", newChar);
      if (newChar > 122) {
        console.log("entering greater than 122");
        let difference = newChar - 122 + 96;
        newMessage.push(String.fromCharCode(difference));
        console.log(
          "String.fromCharCode 97-122|",
          String.fromCharCode(difference)
        );
      } else {
        console.log(
          "String.fromCharCode 97-122|",
          String.fromCharCode(newChar)
        );
        newMessage.push(String.fromCharCode(newChar));
      }
    } else {
      newMessage.push(String.fromCharCode(findChar));
    }
  }
  //   console.log("joined", newMessage.join(""));
  console.log("#####################");
  console.log("#####################");
  return newMessage.join("");
}

const test6 = "simple"; // fcvrpr
console.log(rot13(test6));

// const test5 = "n"; //aN
// console.log(rot13(test5));

// const test4 = "test"; //grfg
// console.log(rot13(test4));

// const test1 = "This is a simple test!"; // Guvf vf n fcvrpr grfg!
// console.log(rot13(test1));

// const test2 = "123 ABC! @#$%^"; // 123 NOP! @#$%^
// console.log(rot13(test2));

// const test3 = "";
// console.log(rot13(test3));

//check if it's within the charcode values
//A-Z 65-90
//a-z 97-122

//------

// let nowString = String.fromCharCode(difference);
// newMessage.push(nowString)

// let nowString = String.fromCharCode(newChar);
// newMessage.push(nowString);
