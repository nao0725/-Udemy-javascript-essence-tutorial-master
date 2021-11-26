// defaultを使って書く場合は{}をつけない
// defaultを使う場合は変数をimportの後に準備
import defaultVal, 
{ publicVal as val, publicFn as fn } from "./moduleA.js";
console.log(val);
// 出力結果は1となる
console.log(defaultVal);
fn();