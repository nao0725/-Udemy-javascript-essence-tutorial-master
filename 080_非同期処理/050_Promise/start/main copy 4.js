new Promise(function(resolve, reject){
  console.log("promise");
  // resolveにしておく
  resolve();
}).then(function(){
  // このthenでなんらかのエラーが発生したと仮定する
  console.log("then");
  // このようにすることで1回目のthenは呼ばれるが次のthenは呼ばれない
  // 処理がcatchに移行し"catchと出力される"
  throw new Error();
}).then(function(){
  console.log("then");
}).catch(function(){
  console.log("catch");
})

console.log("global end")