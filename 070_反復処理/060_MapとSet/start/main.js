// setをインスタンス化
const set = new Set();
const key1 = {};
set.add(key1)

// setは配列の添字を指定して値を取得できない
// よって以下の通りに取得する
// Array.fromというメソッドを使用する
const array = Array.from(set);
// 下記のスプレット構文でも可
// const array = [...set];
console.log(array);
// 添字を指定して出力される（0:{}）
