const mergeSort = (arr, l, r) => {
  if (l < r) {
    const m = l + (r - 1) / 2;
    mergeSort(arr, l, m);
    mergeSort(arr, m+1, r);
    return merge(arr, l, m, r);
  }
}

const merge = (arr, l, m, r) => {
  const n1 = m - l + 1;
  const n2 = r - m;
  const L = [];
  const R = [];

  for (let i = 0; i < n1; i++) {
    L.push(arr[i]);
  }
  for (let i = 0; i < n2; i++) {
    R.push(arr[i]);
  }

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
  }

  while(j < n2) {
    arr[k] = R[j];
    j++;
  }

  return arr;
};

export default mergeSort;