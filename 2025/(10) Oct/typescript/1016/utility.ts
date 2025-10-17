
// type User = {
//     id: number
//     username: string
//     role: "contributor" | "member" | "admin"
// }


// type UpdatedUser = Partial<user>

// let nextUserId = 1

// const users: User[] = [
//     { id:nextUserId++, username: "john_doe", role: "member"},
//     { id: nextUserId++, username: "jane_doe", role: "contributor"}
// ]


// function updateUser(id: number, updates: UpdatedUser) {
//     const foundUser = users.find(user => user.id === id)

//     if(!foundUser) {
//         console.error("User not found!")
//         return
//     }

//     Object.assign(foundUser, updates)

// }

// //dont want either or id or user to be submitted
// function addNewUser(newUser: Omit<User, "id" | "username">) User {
//     const user: User = {
//         id: nextUserId++,
//         ...newUser
//     }

//     users.push(user)
//     return user
// }



// addNewUser({username: "joe_schmoe", role: "member"})

// console.log(users)

//omit type
//takes in type like partial and takes ina second proepty likea  string or union of strings
//the strings are the property names we want to omit fromt he type