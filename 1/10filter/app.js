/**
 * 
 * @param {number[][]} arr 
 * @param {number} elem 
 */
function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let index = 0; index < arr.length; index++){}
    newArr = arr.filter(a=>a.indexOf(elem)==-1);
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));