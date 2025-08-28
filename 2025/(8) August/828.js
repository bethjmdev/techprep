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

  


    // is this correct? do not show me the code if i got it wrong only give me the english corrections. do not give me the correct answer in english or in code. guide me in english to think about what the right answer might be. if something is not lined out a a constraint then dont therorize if it is. if a later step is impacted by a step i did incorrectly earlier in the code do not mention the later step until the issue that is impacting it is fixed. do not give me the answer, guide me to think about what the correct answer could be.




// 1. Employee Attendance Tracker
// You are given a list of employee check-ins for a week:

// [["alice", "mon"], ["bob", "mon"], ["alice", "tue"], ["alice", "wed"], ["bob", "wed"]

// Use a hashmap to count how many days each employee showed up.

// Output: {"alice": 3, "bob": 2}


const attendance = [["alice", "mon"], ["bob", "mon"], ["alice", "tue"], ["alice", "wed"], ["bob", "wed"]]

const counts = {};

for (let i = 0; i < attendance.length; i++) {
	let employee = attendance[i];

		if (counts[employee[0]] == undefined) {
			counts[employee[0]] = 1
		} else {
			counts[employee[0]] += 1
		}
	

}

console.log(counts)


// ------------------------------------------------------------

// 2. Library Borrowed Books
// You get two lists:

// booksBorrowed = ["1984", "dune", "foundation", "1984"]

// booksReturned = ["1984", "dune"]

// Use a hashmap to track how many copies of each book are still borrowed.

// Expected output: {"1984": 1, "foundation": 1}




const booksBorrowed = ["1984", "dune", "foundation", "1984"]

const booksReturned = ["1984", "dune"]

let outstandingBooks = {};

for (let i = 0; i < booksBorrowed.length; i++){
	if (outstandingBooks[booksBorrowed[i]] === undefined) {
		outstandingBooks[booksBorrowed[i]] = 1
	} else {
		outstandingBooks[booksBorrowed[i]] += 1
	}
}


for (let i = 0; i < booksReturned.length; i++) {

	//reduce the value by one if theres a match
	if (outstandingBooks[booksReturned[i]] != undefined) {
		outstandingBooks[booksReturned[i]] -= 1
	}

	//do a second check for values of 0 and remove those
	if (outstandingBooks[booksReturned[i]] == 0) {
		delete outstandingBooks[booksReturned[i]]
	}
}

console.log(outstandingBooks)


// ------------------------------------------------------------



// 4. Classroom Seating Check

// You have a seating chart (row → student):

// {1: "amy", 2: "bob", 3: "carl", 4: "amy"}

// Detect duplicates: find if any student appears more than once.

// Expected output: ["amy"]


const chart = {1: "amy", 2: "bob", 3: "carl", 4: "amy"}

const seating = new Set();

const dups = new Set();

for (let student in chart) {
	let name = chart[student]

	if (seating.has(name)) {
		dups.add(name)
	} else {
		seating.add(name)
	}

}

console.log(dups)



// ------------------------------------------------------------




// 5. Music Playlist Similarity
// Two users have playlists:

// userA = ["song1", "song2", "song3", "song4"]

// userB = ["song2", "song3", "song5"]

// Use hashmaps to find:

// common songs [["song2", "song3"]]

// unique to userA [["song1", "song4"]]

// unique to userB [["song5"]]





const userA = ["song1", "song2", "song3", "song4"]

const userB = ["song2", "song3", "song5"]


userASongs = {};
userBSongs = {};

let both = []
let uniqueA = []
let uniqueB = []

//add arrays to a hashmap
for (let i = 0; i < userA.length; i++) {
	if (userASongs[userA[i]] === undefined) {
		userASongs[userA[i]] = 1
	} 
}


for (let i = 0; i < userB.length; i++) {
	if (userBSongs[userB[i]] === undefined) {
		userBSongs[userB[i]] = 1
	} 
}


//compare the arrays
for (let song in userASongs) {
	if (userBSongs[song]) {
	both.push(song)
	} else {
	uniqueA.push(song)
	}
}

for (let song in userBSongs) {
	if (!userASongs[song]){
	uniqueB.push(song)
	}
}



console.log(both, uniqueA, uniqueB)


