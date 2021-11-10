// setをインスタンス化
const set = new Set();
const key1 = {};
// addメソッドで値を取得
set.add(key1)
set.add(key1)

for(const k of set){
  // このようにしても{}が１つしか出力されない
  console.log(k);
}