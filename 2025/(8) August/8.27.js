// 8. Chat Message Word Count
// Messages:


// ["hi hi there", "there you are", "hi again"]


// Use a hashmap to count total word frequencies across all messages.


// Expected output: {"hi": 3, "there": 2, "you": 1, "are": 1, "again": 1}


const convo = ["hi hi there", "there you are", "hi again"]

let count = {};

let runOn = [];

// let runOn = convo.split(" ");
// now it looks like "hi", "hi", "there", "there"

for (let i = 0; i < convo.length; i++) {
	let split = convo[i].split(" ")
	
	for (let j = 0; j < split.length; j++) {
		runOn.push(split[j])
	}
}


for (let i = 0; i < runOn.length; i++){
	if (count[runOn[i]] === undefined) {
		count[runOn[i]] = 1
	} else {
	count[runOn[i]] += 1
	}
}

//now all values are added to hashmap


//print hashmap
console.log(count)

// --------------------------------

