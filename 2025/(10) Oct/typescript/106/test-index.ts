// const menu = [
//     {name: "Margherita", price: 8},
//     {name: "Pepperoni", price: 10},
//     {name: "Hawaiian", price: 10},
//     {name: "Veggie", price: 9},
// ]


// let cashInRegister = 100;
// let nextOrderId = 1;
// let orderQueue = []



// function addNewPizza(pizzaObj){

//     menu.push(pizzaObj)

// }


// function placeOrder(pizzaName){

//     const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)

//     if (!selectedPizza) {
//         console.log(`${pizzaName} does not exist in the menu`)
//         return
//     }

//     cashInRegister += selectedPizza.price

//     const newOrder = {id: nextOrderId++, pizza: selectedPizza, status: "ordered"};

//     orderQueue.push(newOrder)

//     return newOrder

// }


// function completeOrder(orderId) {

//     const order = orderQueue.find(order => order.id === orderId)

//     order.status = "completed"

//     return order
// }

// //--------  


// addNewPizza({name: "Chicken Bacon Ranch", cost: 12})
// addNewPizza({name: "BBQ", cost: 12})
// addNewPizza({name: "Spicy Sausage", cost: 11})


// placeOrder("Chicken Bacon Ranch")
// completeOrder("1")


// console.log("menu", menu)
// console.log("cash in reg", cashInRegister)
// console.log("Order Queue", orderQueue)