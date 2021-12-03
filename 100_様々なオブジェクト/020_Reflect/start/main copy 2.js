class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// new演算子は内部的にReflectのConstructと同様に内部メソッドとして呼んでいる
// 下記のようにメソッドを使用してインスタンス化できる
// 第一引数にコンストラクタ関数を、第二引数に配列として値を設定する
const obj2 = Reflect.construct(C, [1,2]);
// obj1と同様にC {a: 1, b: 2}と出力される
console.log(obj2);


// const bob = {
//   name: 'Bob',
//   _hello: function () {
//     console.log(`hello ${this.name}`);
//   }
// }

// const tom = {
//   name: 'Tom',
//   _hello: function () {
//     console.log(`hello ${this.name}`);
//   },
//   get hello() {
//     return this._hello();
//   },
// }