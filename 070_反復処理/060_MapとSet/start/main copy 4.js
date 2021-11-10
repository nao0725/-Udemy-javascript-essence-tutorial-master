const map = new Map();
const key1 = {};
map.set(key1,"value1")
// 下記のdeleteメソッドを使うと情報を削除できる
map.delete(key1);
// undefinedと出力される
console.log(map.get(key1));
