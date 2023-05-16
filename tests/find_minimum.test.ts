import { describe, expect, it } from "vitest";
import { findMinimum } from "../src/challenges/find_minimum/solution.ts";
import { removeEven } from "../src/challenges/remove_even/solution.ts";

describe("Arrays", () => {
  it("Challenge: Find Minimum Value in Array", () => {
    const arr = [9, 2, 3, 6];
    expect(findMinimum(arr)).toEqual(2);
  });

  it("Challenge: Remove Even Integers From an Array", () => {
    const arr = [1, 2, 4, 5, 10, 6, 3];
    expect(removeEven(arr)).toStrictEqual([1, 5, 3]);
  });
});
