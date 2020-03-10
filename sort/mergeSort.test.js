import mergeSort from "./mergeSort";

test("mergeSort", () => {
  expect(mergeSort([5, 2, 4 , 6, 1, 3], 0, 5)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});