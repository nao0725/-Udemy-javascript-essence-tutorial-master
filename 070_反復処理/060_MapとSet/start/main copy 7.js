// setをインスタンス化
const set = new Set();
const key1 = {};
set.add(key1)
// キーの値が削除され、何も出力されない
set.delete(key1)
// 値が含まれているか確認する(hasメソッド)
console.log(set.has(key1));
// deleteしているのでfalseが返ってくる
// deleteをコメントアウトするとtrueと返ってくる

for(const k of set){
  console.log(k);
}