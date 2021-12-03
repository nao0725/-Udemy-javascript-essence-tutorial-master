const bob = {
  name: 'Bob',
  _hello: function () {
    console.log(`hello ${this.name}`);
  }
}

const tom = {
  name: 'Tom',
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
  get hello() {
    return this._hello();
  },
}
// 一般的なオブジェクトの呼び方
// hello Tom と出力される
tom.hello;
// これは内部的にはReflectのgetを呼んでいるのと同じ意味になる
// 第一引数にはオブジェクト、第二引数には値を入れる
Reflect.get(tom, "hello")
// 第三引数にはreceiverを入れることも可能
// receiverに登録されたオブジェクトがgetメソッドの中で使用されるthisに束縛される = bind
// 下記のようにbobを渡すとhello Bobと出力される
Reflect.get(tom, "hello", bob)
// 第三引数を書かなければ第一引数と同じになる