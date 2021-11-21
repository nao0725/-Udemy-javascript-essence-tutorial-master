function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, val * 500);
  });
}

// Promise.allとして（）内に反復可能オブジェクトを入れる
// Promise.allが配列に格納されたPromiseのインスタンスが全て完了するまで次のthenメソッドを待つ
Promise.all([sleep(2), sleep(3), sleep(4)])
  .then(function(){
  // 2,3,4,endと出力
  // endが一番最後
  console.log("end");
});
// sleep(0).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })
