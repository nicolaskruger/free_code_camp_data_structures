/**
 * 
 * @param {[]} arr 
 */
function htmlColorNames(arr) {
    // Only change code below this line
    arr.splice(0,2);
    arr = ['DarkSalmon','BlanchedAlmond',...arr];
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));