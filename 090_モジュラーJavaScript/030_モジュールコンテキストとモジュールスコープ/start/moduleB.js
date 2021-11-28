// moduleA.jsで宣言された変数を使用するために読み込む
import "./moduleA.js"
// 以下で1と出力される
console.log(window.b);
// fromを書かなくてもmoduleAを実行したいだけなのでOK