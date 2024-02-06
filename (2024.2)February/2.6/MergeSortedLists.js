var mergeTwoLists = function (list1, list2) {
  if (list1.length == 0 || list1 == null) {
    return list2;
  } else if (list2.length == 0 || list2 == null) {
    return list1;
  } else if (list1.length == 0 && list2.length == 0) {
    return [];
  }

  const checkNumbers = (a, b) => a - b;
  let list3 = list1.concat(list2);

  return list3.sort(checkNumbers);
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));
