new Promise(function(resolve, reject){
  console.log("promise");
  // resolveの引数としてhelloとすると
  resolve("hello");
  // reject("bye");
  // 下記のdataがhelloとして扱われる
}).then(function(data){
  // then helloと出力
  console.log("then " + data);
  // ここで値を返却することで2個目のthenもhelloと出力される
  return data;
}).then(function(data){
  console.log("then " + data);
}).catch(function(data){
  // rejectが使われていた場合catchが呼ばれる
  console.log("catch " + data);
  // finallyは引数を取れない
}).finally(function(){
  console.log("finally");
})

console.log("global end")
