// moduleAの読み込みを行う
// from以下で読み込むファイルを指定する
import { publicVal, publicFn } from "./moduleA.js";
// 0と出力される
console.log(publicVal);
// publicFn calledと出力される
publicFn();