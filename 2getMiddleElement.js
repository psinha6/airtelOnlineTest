function getMiddleElement(arr){
  var num = parseInt(((+Object.keys(arr).pop() + 1) / 2));
  return arr[num];
}
console.log(getMiddleElement([1,2,3,4,5, 20,9]));
