// マイクロタスクの中にマクロタスクがある状態
new Promise(function promise(resolve) {
  // まず一番最初は同期的に実行される`promise`
  console.log('promise');
  // マクロタスクだがthenメソッドはresolveの実行を待つので3番目に下記が実行される
  setTimeout(function task1() {
    console.log('task1');
    resolve();
  });
// resolve実行された時に4番目に下記が出力される
}).then(function job1() {
  console.log('job1');
})

// 次の同期処理である下記が2番目に出力
console.log('global end')

// 実行順序は以下の通りとなる
// promise
// global end
// task1
// job1