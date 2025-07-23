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
    
    if (keys1.length !== keys2.length) {
      return false;
    }
    
    for (let key of keys1) {
      if (map2[key] === undefined || map1[key] !== map2[key]) {
      return false
      }
    }
    
    
    }


