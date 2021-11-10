// mapというオブジェクトを作成
const map = new Map();
// 値をセット 空のオブジェクトを渡す
const key1 = {};

// setメソッドを使って第一引数にキー情報,第二引数に値を渡す
map.set(key1,"value1")
// getメソッドを使用して値を渡すとキーを取得できる
console.log(map.get(key1));
// value1と出力される