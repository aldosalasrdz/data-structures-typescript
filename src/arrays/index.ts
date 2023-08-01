const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

array.push(22);
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift(0);
console.log(array);

array.reverse();
console.log(array);

array.splice(4, 3, 10, 20, 30);
console.log(array);

array.slice(4, 7);
console.log(array);

const array2 = [1, 3, 5, 7, 9, 11, 13, 15];

const mergedArray = array.concat(array2);
console.log(mergedArray);
