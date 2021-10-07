
// 変数をそれぞれ定義
// スクリプトスコープ
let a = 0;
// グローバルスコープ
var b = 0;
function c(){}
debugger;

// グローバルオブジェクトは省略可能
// 以下のように出力する
console.log(b);

// 例
// console.log()で出力する
window.d = 1;
console.log(d);