function updateUniqueItems(shopping) {
  if (!(shopping instanceof Map)) {
    throw Error('Cannot process');
  }
  for (const item of shopping) {
    if (item[1] === 1) {
      shopping.set(item[0], 100);
    }
  }
}

export default updateUniqueItems;
