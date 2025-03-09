// codewars-ი გვქონდა

function smallestInteger(matrix) {
    let count = 0;
    while (matrix.flat().includes(count))
      count++;
    
    return count
}

console.log(smallestInteger([
    [4,5,3,21,3,8], 
    [2,2,6,5,10,9], 
    [7,5,6,8,2,6], 
    [1,4,7,8,9,0], 
    [1,3,6,5,5,1], 
    [2,7,3,4,4,3]])) // output: 11