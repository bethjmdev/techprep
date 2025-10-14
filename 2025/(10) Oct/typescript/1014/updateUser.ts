type UserRole = "contributor" | "member" | "admin"

type User = {
    id: number
    username: string
    role: UserRole
}

const users: User[]= [
    {id: 1, username: "john_doe", role: "member"},
    {id: 2, username: "jane_smith", role: "contributor"},
    {id: 3, username: "guest_user", role: "admin"},
    {id: 4, username: "charlie_brown", role: "member"}
]

function updateUser(id: number, updates: any) {
   const foundUser = users.find(user => user.id === id)

   if(!foundUser) {
    console.error("User Not Found")
    return
   }

   Object.assign(foundUser, updates)
}


updateUser(1, {username: "new_john_doe"});
updateUser(4, {role: "contributor"})