function reArrange(arr: number[]): number[] {
  /* for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j + 1] < 0) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  } */
  /* const result: number[] = [];
  for (const num of arr) {
    if (num < 0) {
      result.push(num);
    }
  }

  for (const num of arr) {
    if (num >= 0) {
      result.push(num);
    }
  }
  return result; */

  let leftMostPosEl = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (i !== leftMostPosEl) {
        const temp = arr[i];
        arr[i] = arr[leftMostPosEl];
        arr[leftMostPosEl] = temp;
      }
      leftMostPosEl++;
    }
  }

  return arr;
}

console.log(reArrange([10, -1, 20, 4, 5, -9, -6]));
