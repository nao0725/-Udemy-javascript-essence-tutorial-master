function sleep(val) {
  // sleepに値が返却されるようにreturnを使う
  // Promiseの中でsetTimeoutを使う
  return new Promise(function(resolve){
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

// sleepのvalを実行
// sleepにresolveの値が入っているのでthenメソッドを使ってコールバック関数を追加
sleep(0).then(function(val){
  //Promiseのチェーンを繋げる
  // Promiseのインスタンスを使ってPromiseをチェーンする
  // 1秒ごとに1,2,と出力される
  return sleep(val);
}).then(function(val){
  return sleep(val);
}).then(function(val){
  return sleep(val);
}).then(function(val){
  return sleep(val);
})
function sleep(val) {
  // sleepに値が返却されるようにreturnを使う
  // Promiseの中でsetTimeoutを使う
  return new Promise(function(resolve){
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

// sleepのvalを実行
// sleepにresolveの値が入っているのでthenメソッドを使ってコールバック関数を追加
sleep(0).then(function(val){
  //Promiseのチェーンを繋げる
  // Promiseのインスタンスを使ってPromiseをチェーンする
  // 1秒ごとに1,2,と出力される
  return sleep(val);
}).then(function(val){
  return sleep(val);
}).then(function(val){
  return sleep(val);
}).then(function(val){
  return sleep(val);
})
