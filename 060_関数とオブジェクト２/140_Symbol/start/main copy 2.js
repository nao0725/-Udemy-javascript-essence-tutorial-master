const s = Symbol("hello");
const s2 = Symbol("hello");
console.log(typeof s);

// new演算子を使用して文字列を作る
const str = new String("Jun");
console.log(str);
// 下記のように記述するとSymbolをキーにしたプロパティがプロトタイプに格納される
String.prototype[s] = function(){

}
// 出力結果の中にSymbol(hello): ƒ ()　が追加される
String.prototype[s2] = function(){

}
// このようにしても同じ名前のプロパティが格納されているが、別々のプロパティとして認識される