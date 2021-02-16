/**
 * 
 * @param {[]} arr 
 */
function mixedNumbers(arr) {
    // Only change code below this line
    ['I', 2, 'three'].reverse().forEach(e=>arr.unshift(e));
    [7, 'VIII', 9].forEach(e=>arr.push(e));
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));