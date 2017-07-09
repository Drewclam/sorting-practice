// constant space in place: select the largest element and swap at the wall
var arr = [3,6,2,5,8,1,9,7,4];

function selectionSort(arr) {
  // linear space: select the smallest element in the array and push into a new array
  var smallestIndex = null;
  var sorted = [];
  // while arr length is greater than 0
  while (arr.length !== 0) {
    // iterate over arr to i
    for (var i = 0; i < arr.length; i++) {
      // if smallest is null or arr[i] is less than smallest
      if (smallestIndex === null || arr[i] < arr[smallestIndex]) {
        // set smallest to arr[i]
        smallestIndex = i;
      }
    }
    // splice smallest out of arr
    var spliced = arr.splice(smallestIndex, 1);
    // push smallest to sorted
    sorted.push(spliced.pop());
    smallestIndex = null;
  }
  // return sorted
  return sorted;
}

selectionSort(arr);