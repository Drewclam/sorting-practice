var arr = [3,6,2,5,8,1,9,7,4];

function bubbleSort(arr) {
  var wall = arr.length;
  while (wall >= 0) {
    for (var i = 0; i < wall; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
    wall--;
  }
  return arr;
}

function swap(arr, x, y) {
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

debug(bubbleSort(arr));