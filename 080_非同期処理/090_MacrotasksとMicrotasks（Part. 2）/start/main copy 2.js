new Promise(function promise(resolve) {
  console.log('promise');

  setTimeout(function task1() {
    console.log('task1');
    resolve();
  });

  // resolve実行後先にjob1を実行
  // マイクロタスクは格納されている全てのジョブを実行する
  // よってjob2,job3も実行する
}).then(function job1() {
  console.log('job1');
  setTimeout(function task2() {
    // マイクロタスク実行後にマクロタスクtask2を実行する
    console.log('task2');
  });
}).then(function job2() {
  console.log('job2');
}).then(function job3() {
  console.log('job3');
})

console.log('global end');

// 実行順序は以下の通りとなる
// promise
// global end
// task1
// job1
// job2
// job3
// task2