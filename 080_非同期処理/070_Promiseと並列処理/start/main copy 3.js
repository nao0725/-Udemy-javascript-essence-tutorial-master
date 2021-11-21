function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, val * 500);
  });
}

Promise.all([sleep(2), sleep(3), sleep(4)])
  .then(function(data){
  console.log(data);
});
sleep(0).then(function(val) {
  // 上記のPromise.allの部分を下記のreturnのところで置換する
  // 次のthenメソッドも下記Promiseの処理が終わってから処理される
  return Promise.all([sleep(2), sleep(3), sleep(4)])
}).then(function(val) {
  // 出力すると先のPromisee.allの値が全て返ってくる
  console.log(val)
  return sleep(val);
}).then(function(val) {
  return sleep(val);
})
