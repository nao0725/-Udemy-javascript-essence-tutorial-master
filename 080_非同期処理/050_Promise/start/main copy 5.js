new Promise(function(resolve, reject){
  console.log("promise");
  resolve();
}).then(function(){
  console.log("then");
}).then(function(){
  console.log("then");
}).catch(function(){
  console.log("catch");
}).finally(function(){
  // このfinallyは必ず呼ばれる
  console.log("finally");
})

console.log("global end")
