new Promise(function(resolve, reject){
  console.log("promise");
  // 1秒後にresolveを実行
  setTimeout(function(){
    resolve("hello");
  }, 1000);
  // このようにするとpromise, global endが先に呼ばれた後に1秒後resolveが呼ばれる
  // rejectも同様
}).then(function(data){
  console.log("then " + data);
  return data;
}).then(function(data){
  console.log("then " + data);
}).catch(function(data){
  console.log("catch " + data);
}).finally(function(){
  console.log("finally");
})

console.log("global end")
