// コールバック関数を1秒間後に待機したあと実行される関数を定義
function sleep(callback){
  setTimeout(function() {
    console.log("hello");
    callback();
    // helloが呼ばれた後にcallback関数が実行される
  },1000)
}

sleep(function(){
  console.log("callback done!");
})
// 1病後にhelloとcallback doneが出力される