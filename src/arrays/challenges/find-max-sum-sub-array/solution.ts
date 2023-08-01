/* function findMaxSumSubArray(A: number[]): void {
  const sums = [];
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      sum += A[j];
      sums.push(sum);
    }
    sum = 0;
  }
  console.log(sums);
  console.log(Math.max(...sums));
}

findMaxSumSubArray([-2, 10, 7, -5, 15, 6]);
// findMaxSumSubArray([1, 2, 20, -9, 4, 5]);
findMaxSumSubArray([1, 10, -1, 11, 5, -30, -7, 20, 25, -35]); */

const findMaxSumSubArray = function (array: number[]) {
  if (array.length < 1) {
    return 0;
  }

  let currMax = array[0];
  let globalMax = array[0];
  const lengtharray = array.length;
  for (let i = 1; i < lengtharray; i++) {
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
};

const v = [-4, -6, -5, 1, 2, 3, 6, -5, 1];
console.log(`Sum of largest subarray: ${findMaxSumSubArray(v)}`);
