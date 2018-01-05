const insertionSort = items => {
  const arrCopy = [...items];

  let valueToInsert;
  let holePosition;

  for (let i = 0; i < arrCopy.length; i++) {
    valueToInsert = arrCopy[i];
    holePosition = i;

    while (holePosition > 0 && arrCopy[holePosition - 1] > valueToInsert) {
      arrCopy[holePosition] = arrCopy[holePosition - 1];
      holePosition--;
    }

    if (holePosition !== i) {
      arrCopy[holePosition] = valueToInsert;
    }
  }

  return arrCopy;
};

module.exports = {
  sort: insertionSort
};
