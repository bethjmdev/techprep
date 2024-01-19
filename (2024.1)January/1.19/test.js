function order(words) {
  let holdingPen = [];

  let wordsArray = words.split(" ");

  //for loop to loop through wordsArray
  for (let i = 0; i < wordsArray.length; i++) {
    // ["is2" "Thi1s" T4est 3a]
    let innerWord = wordsArray[i];
    //for loop to loop through single word
    for (let j = 0; j < innerWord.length; j++) {
      //["i","s","2"]
      //asciiValue >= 48 && asciiValue <= 57;
      if (charCodeAt(innerWord[j]) >= 48 && charCodeAt(innerWord[j]) <= 57) {
        //now wehave the number... how to get it in the right order
        parseInt(innerWord[j]);
        //I turned the number into a proper number

        //if yes holdingPen.push()
        //int minus one index?
      }
    }
  }
}

console.log(order("is2 Thi1s T4est 3a"));
//"Thi1s is2 3a T4est"

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
//"Fo1r the2 g3ood 4of th5e pe6ople"

console.log(order(""));
//""

//look at ind characters of single words and check if ascii value is between 0 and 9
//             if (innerWord[j]  asciiValue >= 48 && asciiValue <= 57;
