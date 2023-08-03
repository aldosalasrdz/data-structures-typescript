function findMinimum(arr: number[]): number {
  let min = arr[0];

  for (const i of arr) {
    if (i < min) {
      min = i;
    }
  }

  return min;
}
