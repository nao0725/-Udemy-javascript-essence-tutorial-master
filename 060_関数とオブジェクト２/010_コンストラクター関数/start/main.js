function Person(name,age){
  this.name = name;
  this.age = age;
}

const bob = new Person("Bob", 18);
const tom = new Person("Tom", 19);
const sun = new Person("Sun", 20);


// 関数を定義
// 普通の関数と区別するために大文字で定義する
function Person(name,age){
  // 格納したいプロパティを定義
  this.name = name;
  this.age = age;
}
// new演算子を用いてインスタンス化
const a = new Person("武田", 30);
console.log(a);
// 他のオブジェクトも生成
const b = new Person("双葉", 25);
const c = new Person("風間", 28);