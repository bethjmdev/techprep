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

const menu: Pizza[] = [
    {id: 1, name: "Margherita", price: 8},
    {id: 2, name: "Pepperoni", price: 10},
    {id: 3, name: "Hawaiian", price: 10},
    {id: 4, name: "Veggie", price: 9},
]


let cashInRegister = 100;
let nextOrderId = 1;
let orderQueue: Order[] = []




function addNewPizza(pizzaObj: Pizza){

    menu.push(pizzaObj)

}


function placeOrder(pizzaName: string){

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


function completeOrder(orderId: number) {

    const order = orderQueue.find(order => order.id === orderId)

    if (!order){
        console.log(`{orderId} was not foudn in order orderQueue`)
        return
    }

    order.status = "completed"

    return order
}




export const getPizzaDetail = (identifier: string | number) => {

    //go into the menu and look at the number or string
    //access that pizza and print that info

    // for (let i = 0; i < menu.length; i++) {
    //     if (menu[i].id === identifier || menu[i].name === identifier){
    //         console.log(menu[i])
    //     }
    // }


    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number"){
        return menu.find(pizza => pizza.id === identifier)
 
    } else {
        throw new TypeError("identifier must be string or num")
    }

}


//--------  


addNewPizza({id: 5, name: "Chicken Bacon Ranch", price: 12})
addNewPizza({id: 6, name: "BBQ", price: 12})
addNewPizza({id: 7,name: "Spicy Sausage", price: 11})


placeOrder("Chicken Bacon Ranch")
completeOrder(1)


console.log("menu", menu)
console.log("cash in reg", cashInRegister)
console.log("Order Queue", orderQueue)