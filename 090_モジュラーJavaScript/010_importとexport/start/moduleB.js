// *をつけるとmoduleAの変数関数がexportされる
import * as moduleA from "./moduleA.js";
console.log(moduleA);

// 上記のようにすると以下の出力結果からmoduleAがファイルの内容を取得していることがわかる
// default: (...)
// publicFn: (...)
// publicVal: (...)