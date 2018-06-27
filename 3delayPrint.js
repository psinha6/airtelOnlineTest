function delayPrint(num, msg, delay){
  for(var i = 0; i < num; i++){
    setTimeout(function () {
      console.log(msg);
    }, delay * i);
  }
}

delayPrint(10, "Hello World", 2000);