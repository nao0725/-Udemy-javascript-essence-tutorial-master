// アロー関数
// 無名関数を記述しやすくした省略記法

function a(name){
  return "hello" + name;
}

// const b = function(name){
//   return "hello" + name;
// }


// const b = name =>  "hello" + name;
// console.log(b(" Tom"));


const c = (name2, name3) => "hello" + name2 + " " + name3;
console.log(c("Tom", "Bob")); 

const b = () => {
  return "hello";
}
console.log (b("Tom", "Bob"))