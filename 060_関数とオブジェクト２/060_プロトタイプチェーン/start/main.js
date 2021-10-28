function Person(name, age) {
  this.name = name;
  this.age = age;
  // this.helloに関数を入れる
  this.hello = function() {
    // 下記と区別するためにOwnPropertyを作成
    console.log('OwnProperty: hello ' + this.name);
  }
}



Object.prototype.hello = function() {
  console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
// この結果の出力はOwnProperty: hello Bobとなる
//　自身のプロパティでhelloが見つかったから
// 自分のプロパティ　→　コンストラクター関数のプロトタイプのメソッド　→　他のプロトタイプへ、、、
// 最終的にはundefinedが返ってくる
bob.hello();