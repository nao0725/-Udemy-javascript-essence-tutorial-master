// データ型を調べる関数を用意
function printTypeAndValue(val){
  // typeofメソッド（？）を入れるとデータ型がわかる
  console.log(typeof val, val)
}

// 変数を定義
let a = 0;
// number 0と出力される
printTypeAndValue(a);

// 文字列　＋　数値
let b = "1" + a;
// この場合Stringの型で出力
// データ型が違う場合はどちらかのデータ型が出力される
printTypeAndValue(b);

// 数値　ー　文字列
let c = 15 - b;
// -は数値の計算にしか使われない！なので、15-10で5が出力
printTypeAndValue(c);

// nullとは参照を保持しない＝空ということ
let d = c - null
// nullが暗黙的に0に変換される 5がそのまま保持
printTypeAndValue(d);

// tureは数値の計算で使用された場合は０扱いになる
let e = d - true
// 数値の４が出力 
printTypeAndValue(e);

// 明示的に型変換をする
// 文字列を数値へ
// parseInt（文字列）で数値に変換
let g = parseInt("1") + a;
// number 1 と出力される
printTypeAndValue(g);
