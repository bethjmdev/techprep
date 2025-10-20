//     https://www.youtube.com/watch?v=SpwzRDUQ1GI&t=975s


type Pizza = {
    id: number
    name: string
    price: number
}

type Status = 'ordered' | 'completed'

type Order = {
    id: number
    pizza: Pizza
    status: Status
}

let cashInRegister = 100;
let nextOrderId = 1;
let orderQueue: Order[] = []

let nextPizzaId = 1;

const menu: Pizza[] = [
    {id: nextPizzaId++, name: "Margherita", price: 8},
    {id: nextPizzaId++, name: "Pepperoni", price: 10},
    {id: nextPizzaId++, name: "Hawaiian", price: 10},
    {id: nextPizzaId++, name: "Veggie", price: 9},
]





//dosnt change the function not returning something but it tells us or other devs that it's not supposed to return anything
function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza{

    const newPizza: Pizza = {
        id: nextPizzaId++,
        ...pizzaObj
    }

    menu.push(newPizza)
    return newPizza
}


function placeOrder(pizzaName: string): Order | undefined{

    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)

    if (!selectedPizza) {
        console.log(`${pizzaName} does not exist in the menu`)
        return
    }

    cashInRegister += selectedPizza.price

    const newOrder:Order = {id: nextOrderId++, pizza: selectedPizza, status: "ordered"};

    orderQueue.push(newOrder)

    return newOrder

}


function addToArray<T>(array:T[], item: T): T[] {
    array.push(item)
    return array
}

addToArray<Pizza>(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12})
addToArray<Order>(orderQueue, {id: nextOrderId++, pizza: menu[2], status: "completed"})



function completeOrder(orderId: number): Order | undefined {

    const order = orderQueue.find(order => order.id === orderId)

    if (!order){
        console.log(`${orderId} was not found in orderQueue`)
        return
    }

    order.status = "completed"

    return order
}




//use undefined in the case that it is possible it could be an undefined value
export const getPizzaDetail = (identifier: string | number): Pizza | undefined => {

    //go into the menu and look at the number or string
    //access that pizza and print that info

    // for (let i = 0; i < menu.length; i++) {
    //     if (menu[i].id === identifier || menu[i].name === identifier){
    //         console.log(menu[i])
    //     } 
    // }


    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } 
    //instead of just doing else  do else if and incldue the value it should be 
    // so that if the TS code is used in JS then  there will be a fail 
    // safe for the error handling
    else if (typeof identifier === "number"){
        return menu.find(pizza => pizza.id === identifier)
 
    } else {
        //also include this to throw an error to help manage bugs
        throw new TypeError("identifier must be string or num")
    }

}


//if you use any you are turinnign off typescript cehcking 


//--------  


addNewPizza({name: "Chicken Bacon Ranch", price: 12})
addNewPizza({name: "BBQ", price: 12})
addNewPizza({name: "Spicy Sausage", price: 11})


placeOrder("Chicken Bacon Ranch")
completeOrder(1)


console.log("menu", menu)
// console.log("cash in reg", cashInRegister)
// console.log("Order Queue", orderQueue)