function isMaxOccured(num, arr){
  var MaxCount = 0;
  var count = 0;
  var mapCount = {};
  for(var i = 0; i < arr.length; i++){
    if (num == arr[i]) {
      count++;
      continue;
    }
    if(!mapCount[arr[i]]){
      mapCount[arr[i]] = 1;
    } else {
      mapCount[arr[i]] += 1;
    }
    
  }
  for(var a in mapCount){
    if(mapCount[a] > count){
      return false;
    }
  }
  return true;
}

console.log(isMaxOccured(1, [1,4,5,2,1,4,5,1]))