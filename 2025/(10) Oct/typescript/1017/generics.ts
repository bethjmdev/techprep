//generics
//add flexibility to existing functions, types, etc
//act like function parameters but for types
//allows us to have placeholders for whatever a type is going to be
//uses angle bracket syntax <>

// const gameScores = [14, 21,33,42,59]
// const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm wollen mittens"];
// const voters = [{name: "Alice", age: 42}, {name: "Bob", age: 77}]




// //takes an array of a parameter
// function getLastItem<PlaceholderType>(array: PlaceholderType[]) {
//     return array[array.length -1]
// }


// console.log(getLastItem(gameScores))
// console.log(getLastItem(favoriteThings))
// console.log(getLastItem(voters))