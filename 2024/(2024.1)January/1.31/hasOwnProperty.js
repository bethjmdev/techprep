//today I am focusing on learning how to "level up" my leet code. I am studying other peoples code and to better understand how to improve my own

//I learned about the hasOwnProperty() method
//you can use it to check whether the object has the specified proprty as it's own property. it can be useful for checking id the object ha inhertied the property rather than it being it's own
//it outputs true or false

//example

const checkProperty = () => {
  function Cat(a, b) {
    //arrow functions cannot use this.
    this.breed = a;
    this.name = b;
  }

  let cat1 = new Cat("Orange Tabby", "Noodle");

  result1 = cat1.hasOwnProperty("breed");
  result2 = cat1.hasOwnProperty("beans");

  let cat2 = new Cat("Black", "Panther");

  result3 = cat2.hasOwnProperty("breed");
  result4 = cat2.hasOwnProperty("name");

  console.log(result1);
  console.log(result2);
  console.log(result3);
  console.log(result4);
};

checkProperty();

//this tells you whether the key exists within the hasmhap
