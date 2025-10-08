// type Food = string

// let favoriteFood: Food = "pizza"


//--------

type Address = {
        street: string
        state: string
        country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address?: Address
}


let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
}


let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "fdd",
        state: "MA",
        country: "USA"
    }
}

//------


function displayInfo(person: Person) {
    console.log(`${person.name} lives at ${person.address?.street}`)

}


displayInfo(person1)