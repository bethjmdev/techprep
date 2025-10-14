// type UserRole = "guest" | "member" | "admin"

// type User = {
//     username: string
//     role: UserRole
// }

// const users: User[]= [
//     {username: "john_doe", role: "member"},
//     {username: "jane_doe", role: "admin"},
//     {username: "guest_user", role: "guest"}
// ]


// //helps whenever refactoring code so you can knwo what it should be returning
// function fetchUserDetails(username: string):User {
//     const user = users.find(user => user.username === username)

//     if(!user) {
//         throw new Error(`user with username ${username} no found`)
//     }

//     return user
// }