// 2. Library Borrowed Books
// You get two lists:

// booksBorrowed = ["1984", "dune", "foundation", "1984"]

// booksReturned = ["1984", "dune"]

// Use a hashmap to track how many copies of each book are still borrowed.

// Expected output: {"1984": 1, "foundation": 1}




const booksBorrowed = ["1984", "dune", "foundation", "1984"]

const booksReturned = ["1984", "dune"]

let out = {};


for (let i = 0; i < booksBorrowed.length; i++) {
	if (out[booksBorrowed[i]] === undefined)  {
		out[booksBorrowed[i]] = 1
	} else {
	out[booksBorrowed[i]] += 1
	}
}

for (let i = 0; i < booksReturned.length; i++) {
	if (out[booksReturned[i]]) {
		out[booksReturned[i]] -= 1
	} 

	if (out[booksReturned[i]] === 0) {
		delete out[booksReturned[i]]
	}
}

console.log(out)


// ----------------------------



// 8. Chat Message Word Count
// Messages:

// ["hi hi there", "there you are", "hi again"]

// Use a hashmap to count total word frequencies across all messages.

// Expected output: {"hi": 3, "there": 2, "you": 1, "are": 1, "again": 1}


const convo = ["hi hi there", "there you are", "hi again"]

const count = {};

for (let i = 0; i < convo.length; i++) {
	let word = convo[i].split(" ")

	for (let j = 0; j < word.length; j++) {
		if (count[word[j]] === undefined) {
			count[word[j]] = 1
		} else {
			count[word[j]] += 1
		}
	}
}

console.log(count)

// ----------------------------

//needed thiis one explained added comment for reference of understandinng


// 3. Exam Submissions
// Students submit assignments for multiple sections:

// {A1: "sarah", A2: "tom", A3: "sarah", A4: "james"}


// Detect which students submitted more than once.
// Expected output: ["sarah"]



const exam = {A1: "sarah", A2: "tom", A3: "sarah", A4: "james"}

let submission = new Set()
let dupe = new Set()


//accessing the hashmap
for (let student in exam) {

	//renaming value to make it easier to type
	let name = exam[student]

	//asking if the Set has name
	if (submission.has(name)){
		//if submission has it then add it to dupe
		dupe.add(name)
	} else {
	//else add it to submission
	submission.add(name)
	}
}

console.log(dupe)

// ----------------------------

// 1. Conference Attendees

// You have a list of badge IDs mapped to names:


// {101: "john", 102: "emma", 103: "mike", 104: "emma"}


// Detect if any attendee registered more than once.


// Expected output: ["emma"]

const id = {101: "john", 102: "emma", 103: "mike", 104: "emma"};

let names = new Set();
let dupes = new Set();

for (let person in id){
	
	if (names.has(id[person])){
		dupes.add(id[person]);
	} else {
		names.add(id[person]);
	}
}

console.log(dupes)

// ----------------------------


// 2. Parking Lot Cars
// A parking lot assigns spots to license plates:

// {1: "ABC123", 2: "XYZ789", 3: "LMN456", 4: "ABC123"}


// Find which license plates appear more than once.
// Expected output: ["ABC123"]



const plates = {1: "ABC123", 2: "XYZ789", 3: "LMN456", 4: "ABC123"};


let license = new Set();
let duplicate = new Set();



for (let car in plates) {
	if (license.has(plates[car])){
		duplicate.add(plates[car])
	} else {
		license.add(plates[car])
	}
}


console.log(duplicate);