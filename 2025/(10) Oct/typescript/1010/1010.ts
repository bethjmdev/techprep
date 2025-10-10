//typing an array

let ages: number[] = [100, 101];


type People = {
    title: string
    age: number
    isStudent: boolean
}

let people1: People = {
    title: "bob",
    age: 30,
    isStudent: false
}



let people2: People = {
    title: "steve",
    age: 31,
    isStudent: true
}


//These do the same thing
let peoples: People[] = [people1, people2];
let poodles: Array<People> = [people1, people2];