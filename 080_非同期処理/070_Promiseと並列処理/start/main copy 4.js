function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, val * 500);
  });
}

// コンソールに2,3,3,4と出力される
// sleep(2)が実行された時点で、次の処理に移行
// 2で引数に渡しているので,上記のval++で+1されるので3と出力される
Promise.race([sleep(2), sleep(3), sleep(4)])
  .then(function(data){
  console.log(data);
});

// sleep(0).then(function(val) {
//   return Promise.all([sleep(2), sleep(3), sleep(4)])
// }).then(function(val) {
//   console.log(val)
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })
