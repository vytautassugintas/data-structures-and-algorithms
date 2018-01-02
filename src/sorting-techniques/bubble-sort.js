const bubbleSortWithTwoLoops = items => {
  const arrCopy = [...items];
  for (let i = 0; i < arrCopy.length; i++) {
    for (let j = 0; j < arrCopy.length - i - 1; j++) {
      if (arrCopy[j] > arrCopy[j + 1]) {
        let tmp = arrCopy[j];
        arrCopy[j] = arrCopy[j + 1];
        arrCopy[j + 1] = tmp;
      }
    }
  }
  return arrCopy;
};

const bubbleSortWithWhile = items => {
  const arrCopy = [...items];
  let swapped;
  do {
    swapped = false;
    for (var i = 0; i < arrCopy.length - 1; i++) {
      if (arrCopy[i] > arrCopy[i + 1]) {
        var temp = arrCopy[i];
        arrCopy[i] = arrCopy[i + 1];
        arrCopy[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arrCopy;
};

bubbleSortRecursive = (array = [], i = 0, j) => {
  arrCopy = [...array];
  j = j === undefined ? arrCopy.length : j;
  if (j === 0) return arrCopy;
  else if (i == j) return bubbleSortRecursive(arrCopy, 0, j - 1);
  else if (arrCopy[i] > arrCopy[i + 1])
    return bubbleSortRecursive(swap(arrCopy, i, i + 1), i + 1, j);
  else return bubbleSortRecursive(arrCopy, i + 1, j);
};

const swap = (array, i, j) => {
  const arrayCopy = [...array];
  const el1 = arrayCopy[i];
  const el2 = arrayCopy[j];
  arrayCopy[i] = el2;
  arrayCopy[j] = el1;
  return arrayCopy;
};

module.exports = {
  sortWithTwoLoops: bubbleSortWithTwoLoops,
  sortWithWhile: bubbleSortWithWhile,
  sortRecursive: bubbleSortRecursive
};
