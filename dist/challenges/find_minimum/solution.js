"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMinimum = void 0;
function findMinimum(arr) {
    let min = arr[0];
    for (const i of arr) {
        if (i < min) {
            min = i;
        }
    }
    return min;
}
exports.findMinimum = findMinimum;
