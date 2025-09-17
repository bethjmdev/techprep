// Hospital Patient Records
// {p1: "eva", p2: "john", p3: "eva", p4: "sam"}
// Check which patients appear more than once.


// const patients = {p1: "eva", p2: "john", p3: "eva", p4: "sam"}

// let name = new Set();
// let dupe = new Set();



// for (let human in patients) {
// 	if (name.has(patients[human])) {
// 		dupe.add(patients[human])
// 	} else {
// 		name.add(patients[human])
// 	}
// }

// console.log(dupe)

// --------------------------------



// Online Course Enrollments
// events = [["java", +2], ["python", +3], ["java", -1], ["sql", +1]]
// Track net enrollments per course.

// const events = [["java", +2], ["python", +3], ["java", -1], ["sql", +1]]

// let language = {};

// for (let i = 0; i < events.length; i++) {

// 	let coding = events[i]
	
// 	if (language[coding[0]] === undefined) {
// 		language[coding[0]] = coding[1]
// 	} else {
// 		language[coding[0]] += coding[1]
// 	}
// }

// console.log(language)


// --------------------------------


// Website Page Visits
// Visits: ["home", "about", "home", "shop", "home", "shop"]
// Track visit counts for each page.


// const visits = ["home", "about", "home", "shop", "home", "shop"];
// let count = {}

// for (let i = 0; i < visits.length; i++) {

// 	let page = visits[i]

// 	if (count[page] === undefined) {
// 		count[page] = 1
// 	} else {
// 	count[page += 1]
// 	}
// }

// console.log(count)

// --------------------------------


// Two Integer Sum II
// Given an array of integers numbers that is sorted in non-decreasing order.

// Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.



// Example 1:

// Input: numbers = [1,2,3,4], target = 3

// Output: [1,2]



// const nums = [1,2,3,4];


// left = 0;
// right = left + 1;

// target = 3

// while (left < nums.length) {

// 	while (right < nums.length) {
// 		if (nums[left] + nums[right] === target) {
// 			return [left + 1, right + 1]
// 		} 

// 		right++
// 	}

// 	left++
// 	right = left + 1
	
	
// } 


// --------------------------------

