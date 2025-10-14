let value: any = 1
value.toUpperCase()

//there is no warning, but should be becuase 
// you're trying to make a number uppercase
//way to get typescript errors to nto apppear for the value

//you should not use any in most cases
//use it when you are in proecss of changing from JS to TS 
// and you dont have all fo the 
// time right now to write out all the TS code to satisfy the wanrings
//can be use temporarily to turn of errors during transition
//often better off turning off the configuration is TS tjat forces you to satisfy
// TS structure fort he code to compile

// if theres a thing you geninuly dont know hte value of use unknown instead of any