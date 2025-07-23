
let sumMap = {};


for (let i = 0; i < nums.length; i++) {


let sum = target - nums[i];

if (sum in sumMap) {
     return [sumMap[map], i]
}

sumMap[nums[i]] = i;



}