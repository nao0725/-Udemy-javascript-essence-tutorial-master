function Person(name, age) {
    this.name = name;
    this.age = age;
}

Object.prototype.hello = function() {
    console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
const result = bob.hasOwnProperty("age");
console.log(result);
// bobオブジェクトの中に"引数"に対応するプロパティはあるか確認できる
console.log("name" in bob);
// この場合プロトタイプチェーンも遡るので、trueと返ってくる
console.log("hello" in bob);
// もちろん存在しないものはfalse
console.log("bye" in bob);
// Objectのプロトタイプに格納されているhasOwnPropertyもプロトタイプチェーンによって格納されているのでtrue
console.log("hasOwnProperty" in bob);

