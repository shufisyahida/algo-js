import insertionSort from "./insertionSort";

test("insertionSort", () => {
  expect(insertionSort([5, 2, 4 , 6, 1, 3])).toStrictEqual([1, 2, 3, 4, 5, 6]);
});