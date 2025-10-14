// // Function to find the maximum sum of a fixed-size subarray
// function maxSubarraySum(nums, k) {

//     //catch srrays that wouldnt work in this code
//     if (nums.length < k) {
//       return null; // Not enough elements for a full window
//     }
  
//     //initiate the values
//     let windowSum = 0;
//     let maxSum = 0;

//     // Step 1: sum the first window of size k
//     for (let i = 0; i < k; i++) {
//       windowSum += nums[i];
//     }
//     maxSum = windowSum;

//     // Step 2: slide the window across the array
    
//         //start at k becuase we already looked at the first k array items and the array starts at 0
//     for (let end = k; end < nums.length; end++) {
        
        

//     //remove the previous number from the sum and then add the new number
//       windowSum = windowSum - nums[end - k] + nums[end];

//       //set new maxSum if applicable
//       if (windowSum > maxSum) {
//         maxSum = windowSum;
//       }

//     }
  
//     return maxSum;
//   }
  

//   // Test examples
//   const examples = [
//     // { nums: [1, 2, 3, 4, 5], k: 3 },
//     { nums: [2, 1, 5, 1, 3, 2,4,3,2], k: 4 },
//     // { nums: [4, 2, 1, 7, 8, 1, 2, 8, 1, 0], k: 3 },
//     // { nums: [1, 2], k: 2 },
//     // { nums: [1, 2], k: 3 } // example where k > array length
//   ];
  
//   // Run and print results
//   examples.forEach(example => {
//     console.log(
//       `nums = [${example.nums}], k = ${example.k} → max sum = ${maxSubarraySum(example.nums, example.k)}`
//     );
//   });
  


  // --------------------------------------------------




  //first step is plannign for arrays where k > length of aray and returning null or -1

  //initate the values we'll need

  //add up the first k numbers in the array

  //do a for loop for the sliding window effect and subtract the previous k from the max sum then add int he current k

  //check if maxSum is greater than curretnSum, if so then update maxSum


  if (nums.length < k) {
    return null
  }

  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += nums[i]
  }

  maxSum = currentSum

  for (let end = k; end < nums.length; end++) {

    currentSum = (currentSum - nums[end - k]) + nums[end]

    if (currentSum > maxSum){
        maxSum = currentSum
    }
  }

  return maxSum