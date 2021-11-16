// 引数にvalを追加し、+1加算される形でコンソールで出力されるようにする
function sleep(callback,val){
  setTimeout(function() {
    console.log(val++);
    // callbackの引数としてvalを渡す
    callback(val);
  },1000)
}

// callbackの引数として渡しているのでここにもvalを渡す
sleep(function(val){
  console.log("callback done!");
  // valは0と出力される
}, 0)

//　sleepをさらにsleepの中で実行する
sleep(function(val){
  sleep(function(val){
    // このようにすることで1秒後に0, また1秒後に1と出力される
  }, val)
}, 0)

sleep(function(val){
  sleep(function(val){
    sleep(function(val){
      sleep(function(val){
        sleep(function(val){
            // 4まで出力される
        }, val)
      }, val)
    }, val)
  }, val)
}, 0)


