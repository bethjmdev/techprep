type User = {
    username: string
    role: 'guest' | 'member' | 'admin'
}

type UserRole = 'guest' | 'member' | 'admin'
//can do either of the above


let userRole: UserRole = "guest"


