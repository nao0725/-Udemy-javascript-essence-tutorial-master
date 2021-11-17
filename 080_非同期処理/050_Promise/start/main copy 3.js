new Promise(function(resolve, reject){
  console.log("promise");
  // rejectを実行
  reject();
}).then(function(){
  console.log("then");
}).then(function(){
  console.log("then");
  // catchメソッドを使用
}).catch(function(){
  // thenはスキップされる
  console.log("catch");
})

console.log("global end")