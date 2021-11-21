function sleep(val) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(val++);
      // reject に変更
      reject(val);
    }, val * 500);
  });
}


Promise.all([sleep(2), sleep(3), sleep(4)])
  .then(function(data){
  console.log(data);
}).catch(function(e){
  // この場合catchの処理にエラーの表示が出る
  // allSettleではエラーが出力されない(ステータスで確認)  
  console.error(e);
});

// sleep(0).then(function(val) {
//   return Promise.all([sleep(2), sleep(3), sleep(4)])
// }).then(function(val) {
//   console.log(val)
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })
