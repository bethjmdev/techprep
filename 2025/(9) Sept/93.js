// Sports Practice Attendance
// You are given a list of players attending practices:

// [["sam", "mon"], ["lisa", "mon"], ["sam", "wed"], ["lisa", "thu"], ["tom", "wed"]

// Use a hashmap to count how many practices each player attended.



const players = [["sam", "mon"], ["lisa", "mon"], ["sam", "wed"], ["lisa", "thu"], ["tom", "wed"]];

let count = {};


for (let i = 0; i < players.length; i++) {
	let player = players[i]

	if (count[player[0]] === undefined) {
		count[player[0]] = 1
	} else {
		count[player[0]] += 1
	}

}

console.log(count)

// --------------------------------


// Online Course Enrollments

// events = [["java", +2], ["python", +3], ["java", -1], ["sql", +1]

// Track net enrollments per course.




const events = [["java", +2], ["python", +3], ["java", -1], ["sql", +1]]

let enrollment = {};



for (let i = 0; i < events.length; i++) {

	let course = events[i];

	if (enrollment[course[0]] === undefined) {
		enrollment[course[0]] = course[1]
	} else {
		enrollment[course[0]] += course[1]
	}


}


console.log(enrollment)

// --------------------------------