class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

// インスタンス化したものを変数に格納
const obj1 = new C(1,2)
// C {a: 1, b: 2}と出力される
console.log(obj1);


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