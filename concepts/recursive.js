const numArr = [9,8,7,6,5,4,3,2,1];

function recursiveShift(numArr) {
  if (numArr.length != 0) {
    const index = numArr[0];
    console.log(index)
    numArr.shift()
    recursiveShift(numArr)
  }
}
