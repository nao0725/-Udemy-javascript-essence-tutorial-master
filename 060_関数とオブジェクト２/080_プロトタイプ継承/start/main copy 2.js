function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.hello = function() {
  console.log('hello ' + this.name);
}
function Japanese(name,age){
    Person.call(this, name, age);
}
Japanese.prototype = Object.create(Person.prototype)
// 上記のPersonをコピーして持ってきて
// Japaneseのプロトタイプのhelloメソッドとして変更
Japanese.prototype.hello = function() {
  console.log('こんにちは ' + this.name);
}

// PersonとJapaneseはそれぞれ独立して存在しているので、メソッド変更して使いまわしが可能
Japanese.prototype.bye = function() {
  console.log('じゃあな ' + this.name);
}

const taro = new Japanese("太郎", 23);
console.log(taro);
  // 上書きされたので出力結果は"こんにちは　太郎"になる
taro.hello();
// byeメソッドを使用して,”じゃあな　太郎”とすることができる
taro.bye();