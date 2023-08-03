function findMaxSumSubArray(array: number[]) {
  if (array.length < 1) {
    return 0;
  }

  let currMax = array[0];
  let globalMax = array[0];

  for (let i = 1; i < array.length; i++) {
    if (currMax < 0) {
      currMax = array[i];
    } else {
      currMax += array[i];
    }

    if (globalMax < currMax) {
      globalMax = currMax;
    }
  }
  return globalMax;
}
