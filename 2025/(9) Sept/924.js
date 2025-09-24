// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
    
//     let sumStore = {}

//     for (let i = 0; i < nums.length; i++){
//         //loop through nums
//         //fgure out what value we need  to reach target
//         //check if sumStore has that value
//         //if yes, print
//         //if not, add it to the map

//         let need = target - nums[i];

//         if (sumStore[need] !== undefined) {
//             return [sumStore[need], i]
//         } else {
//             sumStore[nums[i]] = i;
//         }
//     }

// };

// --------------------------------