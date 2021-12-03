class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

const obj2 = Reflect.construct(C, [1,2]);
console.log(obj2);
// aという値がobj2に含まれているかどうか確認できる（true or falseで出力）
console.log("a" in obj2);
// 上記は Reflectのhasというメソッドと同様の内部メソッドを呼んでいる
// 第一引数にはオブジェクト、第二引数には判定する値（ここではfalse）を入れる
console.log(Reflect.has(obj2, "c"))


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