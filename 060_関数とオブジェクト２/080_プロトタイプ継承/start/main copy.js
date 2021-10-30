function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}

// Japanese関数を用意
// Personのプロトタイプを継承したい
function Japanese(name,age){
    // Person関数で使ってるthisをcallメソッドで呼び出す
    // 引数内のthisはJapaneseの関数コンテキスト内のthis
    Person.call(this, name, age);
}
// createでJapaneseのプロトタイプにPersonのプロトタイプを格納する
Japanese.prototype = Object.create(Person.prototype)
// インスタンス化して実行
const taro = new Japanese("太郎", 23);
// Japanese {name: '太郎', age: 23}
console.log(taro);
// Personのhelloメソッドをtaroから呼んでみると
// hello " 太郎"と出力
taro.hello();