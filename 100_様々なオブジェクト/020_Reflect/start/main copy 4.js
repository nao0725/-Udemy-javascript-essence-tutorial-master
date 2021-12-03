class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}
// try...catch構文でエラー出力
try{
  Object.defineProperty
} catch(e) {

}

// 上記のように書くのは面倒なので
if(Reflect.defineProperty){
  // trueであればここのブロック結果が出力
} else {
  // falseであればここのブロック結果が出力
}



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