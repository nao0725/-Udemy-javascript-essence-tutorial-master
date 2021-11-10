
const array = ['a', 'b', 'c'];

// 4番目を定義する
array[4] = "e"

for(let v of array){
  // cの後にundefined　e と出力される
  // ３番目の値が定義されていないため
  console.log(v);
}