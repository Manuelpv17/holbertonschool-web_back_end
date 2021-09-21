function cleanSet(mySet, starString) {
  let result = '';

  if (!starString || starString.length === 0) {
    return '';
  }
  mySet.forEach((element) => {
    if (element && element.startsWith(starString)) {
      result += `${element.slice(starString.length)}-`;
    }
  });

  return result.slice(0, result.length - 1);
}

export default cleanSet;
