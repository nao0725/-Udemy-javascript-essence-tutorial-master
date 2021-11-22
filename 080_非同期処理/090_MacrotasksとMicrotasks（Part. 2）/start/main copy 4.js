new Promise(function promise(resolve) {
  console.log('promise');

  setTimeout(function task1() {
    console.log('task1');
    resolve();
  });

}).then(function job1() {
  console.log('job1');
  setTimeout(function task2() {
    console.log('task2');
    // 先にresolveを実行し、job1~3まで実行
    // setTimeoutの関数に従うのでtask2実行後にjob4を実行する
    queueMicrotask(function job4(){
      console.log("job4");
    });
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
// job4 　←　ここで実行されてる