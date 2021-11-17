// Promiseの基本構文
// Promiseの引数としてコールバック関数を設定する
new Promise(function(resolve, reject){
  // resolveを使った場合thenメソッドを呼び出す
  resolve("hello")
}).then(function(data){
  console.log(data) //helloと出力される
}).catch(
  //  スキップされる
).finally(function(){
  　console.log("終了処理");
});

// Promiseの引数としてコールバック関数を設定する
new Promise(function(resolve, reject){
  // rejectを使った場合catchメソッドを呼び出す
  reject("bye")
}).then(
  //  スキップされる
).catch(function(data){
    console.log(data) //byeと出力される
  }
  // finallyメソッドで使用するコールバック関数は引数を取らない
).finally(function(){
  　console.log("終了処理");
});


