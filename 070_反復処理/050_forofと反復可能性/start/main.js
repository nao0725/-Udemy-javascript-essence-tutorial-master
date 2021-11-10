const array = ['a', 'b', 'c'];

array[4] = "e"

// プロトタイプの値でも返却することはない
// methodメソッドがループで出現しない
Object.prototype.method = function(){}

// 配列のイテレーターではenumerableを参照していない
Object.defineProperty(array, 0, {
  // 配列の0番目（a）がループで返ってくる
  enumerable: false
})

const d = Object.getOwnPropertyDescriptor(array, 0);
// この結果もenumerableはfalseとなっている
console.log(d);

for(let v of array){
  console.log(v);
}