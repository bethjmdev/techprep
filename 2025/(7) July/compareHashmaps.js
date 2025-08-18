//Object.keys() the hashmaps to get a list of the keys

//check that the maps have the same length

//compare keys

// if things dont work along the way return false


//if things work at the end return true

// ---------------------------------






let areHasmapsEqual = (map1, map2) => {

    // get he keys in the object to be able to compare them
      let keys1 = Object.keys(map1);
      let keys2 = Object.keys(map2);
    

      //checks if maps are the same length
    if (keys1.length !== keys2.length) {
      return false;
    }
    
    for (let key of keys1) {
      //if they dont have the same keys
      if (map2[key] === undefined 
        //or if they dont match values
        || map1[key] !== map2[key]) {
      return false
      }
    }
    
    
    }

    //so for comparing hashmaps its...
    //turn the map into a key object
    //compare the length of each of them
    //check if all the keys in map1 match teh keys in map2
    //check if the values are the same

    // ---------------------------------


    let warehouse1 = {
      apple: 10,
      banana: 5,
      orange: 8
    };
    
    let warehouse2 = {
      orange: 8,
      banana: 5,
      apple: 10
    };
    
    const compareMaps = (warehouse1, warehouse2) => {
      //turn both maps to object keys
    
    let key1 = Object.keys(warehouse1);
    let key2 = Object.keys(warehouse2);
    
    //check if length matches
    if (key1.length !== key2.length) {
      return false;
    }
    
    
    //this is what lets me compare map1
    for (let key of key1) {
    
    //this is what im comparing map1 to
      if (warehouse2[key] === undefined || warehouse1[key] !== warehouse2[key]) {
      return false
      }
    }
    
    return true
    }
    

    
    // ---------------------------------

    const warehouseA = {
      apples: 10,
      bananas: 5,
      oranges: 8
    };
    
    const warehouseB = {
      oranges: 8,
      bananas: 5,
      apples: 10
    };
    
    const warehouseC = {
      apples: 10,
      bananas: 4,
      oranges: 8
    };
    
    
    
    const compareInventory = (warehouseA, warehouseB, warehouseC) => {
      
      //turn into keys
      let keyA = Object.keys(warehouseA);
      let keyB  = Object.keys(warehouseB);
      let keyC = Object.keys(warehouseC);
    
      //compare length
      if (keyA.length !== keyB.length) {
      return false;
      }
    
      if (keyA.length !== keyC.length) {
      return false;
      }
    
      for (let key of keyA) {
      if (warehouseB[key] === undefined || warehouseA[key] !== warehouseB[key]) {
      return false
      }
    
      if (warehouseC[key] === undefined || warehouseA[key] !== warehouseC[key]) {
      return false
      }
      }
    
      return true;
    
    }

    // ---------------------------------

    
let room1 = {
  "Alice": 18,
  "Bob": 20,
  "Charlie": 22
};

let room2 = {
  "Alice": 18,
  "Bob": 21,  // different
  "Charlie": 22
};

let room3 = {
  "Alice": 18,
  "Bob": 20,
  "Charlie": 22
};


const attendance = () => {

  let group1 = Object.keys(room1)
  let group2 = Object.keys(room2)
  let group3 = Object.keys(room3)

if (group1.length !== group2.length || group1.length !== group3.length) {
  return false
}

for (let key of group1) {
  
  if (room2[key] == undefined || room1[key] !== room2[key]) {
  return false
  } else if (room3[key] == undefined || room1[key] !== room3[key]) {
  return false
  }


}

  return true


}

// ---------------------------------

let hours1 = {
  "Alice": 40,
  "Bob": 35,
  "Charlie": 30
};

let hours2 = {
  "Charlie": 30,
  "Bob": 35,
  "Alice": 40
};


let areSame = () => {
  let key1 = Object.keys(hours1);
let key2 = Object.keys(hours2);

if (key1.length != key2.length) {
  return false;
}

//compare keys
for (let key of key1) {
  
  if (hours2[key] === undefined || hours2[key] !== hours1[key]) {
  return false
  }
}



return true
}


// ---------------------------------


let salesA = {
  "Notebooks": 12,
  "Pens": 30,
  "Erasers": 8,
  "Markers": 15
};

let salesB = {
  "Erasers": 8,
  "Markers": 15,
  "Notebooks": 12,
  "Pens": 30
};



let isSame = () => {
  
  let key1 = Object.keys(salesA);
  let key2 = Object.keys(salesB);

  if (key1.length !== key2.length) {
  return false
  }

  for (let key of salesA) {
  if (salesB[key] === undefined || salesA[key] !== salesB[key]) {
  return false
  }
  }

  return true
}