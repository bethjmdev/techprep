// const nums = [1, 2, 3, 3, 3, 4, 4, 4, 5, 7, 9, 10, 11];
const nums = [4,4,4,4,4,4,4,5,5,5,5,5, 5, 5,6,6,7,8,9]
const target = 4;

function findLastOccurrence(nums, target) {

    let left = 0;
    let right = nums.length - 1;
    
    let middle;
    
    while (left <= right) {
    
        middle = Math.floor((left + right) /2)
        midNum = nums[middle]
        console.log("midNum", midNum)
        console.log("middle", middle)
        console.log("-------")
        
        if (midNum === target) {
            console.log("if")

            
            
        } else if ( midNum < left ) {
            console.log("else if")
            left = middle + 1
        } else {
            console.log("else")
            right = middle - 1
        }
    
    }
    
    return 0
}

console.log(findLastOccurrence(nums, target));
