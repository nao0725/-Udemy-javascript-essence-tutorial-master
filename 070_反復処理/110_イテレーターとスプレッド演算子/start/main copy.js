// 配列を準備
const array1 = [1,2,3,4,5];
// スプレッド演算子によって展開されたものが再度array2に格納される(新しい配列を作っている)
const array2 = [...array1];
// (5) [1, 2, 3, 4, 5]と出力
console.log(array2);
// array1とarray2は別の配列となっている
console.log(array1 === array2);
// falseと出力される
//　先頭に0を足したり、後方に6番目を追加したりして直感的に配列を動かせる
const array3 = [0,...array1, 6]
// (7) [0, 1, 2, 3, 4, 5, 6] と出力
console.log(array3);