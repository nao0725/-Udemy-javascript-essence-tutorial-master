new Promise(function(resolve, reject){
  // コンソールでpromiseと出力されるか確認
  console.log("promise");
  // ここでpromiseを実行することで、thenが出力される
  // global endが先に実行される（thenが非同期で実行されるから）
  resolve();
  // 下記のように繋げて書いても多階層になることはない　＝　可読性が上がる
}).then(function(){
  console.log("then");
}).then(function(){
  console.log("then");
}).then(function(){
  console.log("then");
}).then(function(){
  console.log("then");
})

// ここでグローバルコンテキストが終了したことを証明
// then, catch, finallyが非同期実行されることが確認できる
console.log("global end")