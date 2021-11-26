// asを使用してこのファイル内でのみ使用できる名前にする
import { publicVal as val, publicFn as fn } from "./moduleA.js";
// asに合わせて名前を変更
console.log(val);
fn();
// 出力結果は変わらない