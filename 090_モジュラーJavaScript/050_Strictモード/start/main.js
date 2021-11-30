function fn() {
  "use strict"
  return this;
}
// callでthisの値を変更
console.log(fn.call(2));
// 2と出力される
// Strictモードを外すとNumber {2}とオブジェクトでラップされたプリミティブ型の値が帰ってくる
// 文字列も同様
console.log(fn.call("2"));
// 2と帰ってくる