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
  });
  // thenメソッドが呼ばれた際にjob4が発見されるので、job2,3よりも先に実行される
  queueMicrotask(function job4(){
    console.log("job4");
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
// job4 　←　ここで実行されてる
// job2
// job3
// task2