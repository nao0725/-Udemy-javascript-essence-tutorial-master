

// Symbolを定義
// コンストラクター関数とは違い、new演算子を使わない
const a = Symbol();
// Symbol()と出力される
console.log(a);
// 文字列や数値も引数として渡せる
const b = Symbol("hello");
// Symbol(hello)と出力される
console.log(b);
// 例えば同じ値を別な変数に入れると
const c = Symbol("hello");
console.log(c);
// 下記の結果はfalseとなる
console.log(b === c);
// 一意の値なのでそれぞれ別な値として識別される
// Symbolはプリミティブ型のひとつなので、typeofで確認するとsymbolというデータ型となる
console.log(typeof c);