// //     https://www.youtube.com/watch?v=SpwzRDUQ1GI&t=975s
// var menu = [
//     { name: "Margherita", price: 8 },
//     { name: "Pepperoni", price: 10 },
//     { name: "Hawaiian", price: 10 },
//     { name: "Veggie", price: 9 },
// ];
// var cashInRegister = 100;
// var nextOrderId = 1;
// var orderQueue = [];
// function addNewPizza(pizzaObj) {
//     menu.push(pizzaObj);
// }
// function placeOrder(pizzaName) {
//     var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
//     if (!selectedPizza) {
//         console.log("".concat(pizzaName, " does not exist in the menu"));
//         return;
//     }
//     cashInRegister += selectedPizza.price;
//     var newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
//     orderQueue.push(newOrder);
//     return newOrder;
// }
// function completeOrder(orderId) {
//     var order = orderQueue.find(function (order) { return order.id === orderId; });
//     if (!order) {
//         console.log("{orderId} was not foudn in order orderQueue");
//         return;
//     }
//     order.status = "completed";
//     return order;
// }
// //--------  
// addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
// addNewPizza({ name: "BBQ", price: 12 });
// addNewPizza({ name: "Spicy Sausage", price: 11 });
// placeOrder("Chicken Bacon Ranch");
// completeOrder(1);
// console.log("menu", menu);
// console.log("cash in reg", cashInRegister);
// console.log("Order Queue", orderQueue);
