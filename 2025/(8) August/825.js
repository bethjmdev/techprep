  // is this correct? do not show me the code if i got it wrong only give me the english corrections. do not give me the answer in english or in code. guide me in english to think about what the right answer might be. if something is not lined out a a constraint then dont therorize if it is


//   1. Employee Attendance Tracker

//   You are given a list of employee check-ins for a week:
//   [["alice", "mon"], ["bob", "mon"], ["alice", "tue"], ["alice", "wed"], ["bob", "wed"]]
  
//   Use a hashmap to count how many days each employee showed up.
//   Output: {"alice": 3, "bob": 2}
  
  
  
  const checkIn = [["alice", "mon"], ["bob", "mon"], ["alice", "tue"], ["alice", "wed"], ["bob", "wed"]]
  
  
  const attendance = {};
  
  for (let i = 0; i < checkIn.length; i++) {
  
  
  if (attendance[checkIn[i][0]] === undefined) {
    attendance[checkIn[i][0]] = 1
  } else {
    attendance[checkIn[i][0]] += 1
  }
  
  }
  
  
  console.log(attendance)

  // --------------------------------


//   3. Online Shopping Carts
// You receive multiple shopping carts from different users:

user1: ["apple", "banana", "apple"]  
user2: ["banana", "orange"]  
user3: ["apple", "orange", "orange"]  


// Build a hashmap to count total demand across all users.
// Expected output: {"apple": 3, "banana": 2, "orange": 3}

const total1 = user1.concat(user2);
const finalArray = total1.concat(user3);


let fruit = {}

for (let i = 0; i < finalArray.length; i++) {

if (fruit[finalArray[i]] === undefined){
  fruit[finalArray[i]] = 1
} else {
  fruit[finalArray[i]] += 1
}

}

console.log(fruit)

// --------------------------------

