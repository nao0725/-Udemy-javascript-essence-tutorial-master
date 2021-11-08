// ループ分を定義
for(let i = 0; i < 5; i++) {
  const j = i * 2
  // 2,4,6,8と出力される
  console.log(j)
}
// constは再代入も再宣言もブロックスコープが1ループ毎に切り替わっていないと何度も呼び出されてエラーになるはず
// しかし、そうならないのは1ループ毎にブロックスコープが切り替わっているから