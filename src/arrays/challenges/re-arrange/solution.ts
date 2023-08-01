function reArrange(arr: number[]): number[] {
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
