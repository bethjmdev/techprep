// 8. Chat Message Word Count
// Messages:

// ["hi hi there", "there you are", "hi again"]

// Use a hashmap to count total word frequencies across all messages.

// Expected output: {"hi": 3, "there": 2, "you": 1, "are": 1, "again": 1}





const convo = ["hi hi there", "there you are", "hi again"];

let wordCount = {};

for (let i = 0; i < convo.length; i++ ) {
	let words = convo[i].split(" ")

	for (let j = 0; j < words.length; j++){
		if (wordCount[words[j]] === undefined) {
			wordCount[words[j]] = 1
		} else {
			wordCount[words[j]] +=1
		}
	}

}

console.log(wordCount)


// ------------------------------------------------------------

  // is this correct? do not show me the code if i got it wrong only give me the english corrections. do not give me the correct answer in english or in code. guide me in english to think about what the right answer might be. if something is not lined out a a constraint then dont therorize if it is. if a later step is impacted by a step i did incorrectly earlier in the code do not mention the later step until the issue that is impacting it is fixed. do not give me the answer, guide me to think about what the correct answer could be.




//   3. Online Shopping Carts
//   You receive multiple shopping carts from different users:
  
//   user1: ["apple", "banana", "apple"]  
//   user2: ["banana", "orange"]  
//   user3: ["apple", "orange", "orange"]  
  
  
//   Build a hashmap to count total demand across all users.
//   Expected output: {"apple": 3, "banana": 2, "orange": 3}
  
  
  
  const user1 = ["apple", "banana", "apple"];
  const user2 = ["banana", "orange"];
  const user3 = ["apple", "orange", "orange"];
  
  let count = {};
  
  const combined = user1.concat(user2, user3);
  
  for (let i = 0; i < combined.length; i++) {
      if (count[combined[i]] == undefined) {
          count[combined[i]] = 1;
      } else {
          count[combined[i]] += 1;
      }
  }
  
  console.log(count)


  // ------------------------------------------------------------

  

  