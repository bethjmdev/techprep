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




  // is this correct? do not show me the code if i got it wrong only give me the english corrections. do not give me the answer in english or in code. guide me in english to think about what the right answer might be. if something is not lined out a a constraint then dont therorize if it is. if a later step is impacted by a step i did incorrectly earlier in the code do not mention the later step until the issue that is impacting it is fixed 



//   7. City Population Migration

//   Input: You are given a list of migration events. Each event is a tuple of the form:
  
//   (source_city, destination_city, number_of_people)
  
//   source_city: the city people are leaving.
  
//   destination_city: the city people are moving to.
  
//   number_of_people: the number of people moving.
  
//   [("boston", "nyc", 50), ("nyc", "chicago", 30), ("boston", "chicago", 20)]
  
  
//   Track the net population change per city using a hashmap.
//   Expected output: city name and net change
  
//   boston: -70
  
//   nyc: +20
  
//   chicago: +50
  
  
  const popChange = [["boston", "nyc", 50], ["nyc", "chicago", 30], ["boston", "chicago", 20]]
  
  
  let popDiff = {};
  
  for (let i = 0; i < popChange.length; i++){
  
      let city = popChange[i]
      
          
  
          if (popDiff[city[0]] === undefined ) {
              popDiff[city[0]] = -city[2]
          } else {
              popDiff[city[0]] -= city[2]
          }
  
  
  
          if (popDiff[city[1]] === undefined) {
              popDiff[city[1]] = city[2]
          } else {
              popDiff[city[1]] += city[2]
          }
      
  }
  
  
      for (let place in popDiff) {
      console.log(place + ":" + popDiff[place])
      }


      // --------------------------------




// 6. Customer Order Validation
// Given:

// ordered = ["burger", "fries", "fries", "cola"]

// delivered = ["burger", "fries", "cola"]

// Use hashmaps to find which items are missing or duplicated in delivery.

// Expected output: missing 1 fries




ordered = ["burger", "fries", "fries", "cola"]

delivered = ["burger", "fries", "cola"]


let food = {}

for (let i = 0; i < ordered.length; i++) {
	if (food[ordered[i]] === undefined) {
		food[ordered[i]] = 1
	} else {
		food[ordered[i]] += 1
	}
}

for (let i = 0; i < delivered.length; i++) {
	if (food[delivered[i]] === undefined) {
		food[delivered[i]] = 1
	} else {
		food[delivered[i]] += 1
	}
}


for (let order in food) {
	if (food[order] !== 2) {
	console.log("missing" + order)
	}
}

// --------------------------------
