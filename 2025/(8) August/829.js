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

