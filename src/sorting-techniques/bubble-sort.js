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

function bubbleSortWithWhile(items) {
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
}

module.exports = {
    sortWithTwoLoops: bubbleSortWithTwoLoops,
    sortWithWhile: bubbleSortWithWhile
  };
