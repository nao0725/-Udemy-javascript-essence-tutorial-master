// 関数を定義
function fn(){
  let a = 0;
  return a++;
}
// 出力結果は0となる
// aが++される前にreturnで返っている
console.log(fn());
// 出力結果は5となる
// 「!0 = true = 1」と暗黙的に型変換が行われるため
// not演算子のほうが優先順位が高い
console.log(!fn() * 5);
// trueと出力される
// グループ化優先(0 × 5)の後、!演算子でfalse　→ trueと変換される
console.log(!(fn() * 5))