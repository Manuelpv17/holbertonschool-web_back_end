function hasValuesFromArray(mySet, myArray) {
  return myArray.every((e) => mySet.has(e));
}

export default hasValuesFromArray;
