// マクロタスク
// タスクの待機時間はなし
setTimeout(function task1() {
  console.log('task1');
});

// マイクロタスク
new Promise(function promise(resolve) {
  console.log('promise');
  resolve();
}).then(function job1() {
  console.log('job1');
});

// グローバルコンテキスト
console.log('global end');

// 実行結果は以下の通り
// Promise
// global end
// job1
// task1