// 非同期処理でタスクキューで処理される
// グローバルコンテキストが呼ばれた後に実行される
setTimeout(function task1() {
  console.log('task1');
});

new Promise(function promise(resolve) {
  // ここは同期的に処理される
  //　だから一番最初に表示される
  console.log('promise');
  resolve();
}).then(function job1() {
  // ここも非同期処理なのでグローバルコンテキスト実行後
  // マイクロタスクが先に処理されるのでこちらが先に出力される
  console.log('job1');
});

// 先の同期処理"promise"後表示
console.log('global end');