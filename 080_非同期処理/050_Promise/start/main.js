new Promise(function(resolve, reject){
  console.log("promise");
  resolve("hello");
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
