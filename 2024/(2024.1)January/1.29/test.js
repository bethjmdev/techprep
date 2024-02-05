var mergeTwoLists = function (list1, list2) {
  list1 = list1.concat(list2);

  const checkNumbers = (a, b) => a - b;

  return list1.sort(checkNumbers);
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([5, 3, 1, 6], [8, 10, 45, 21]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));
