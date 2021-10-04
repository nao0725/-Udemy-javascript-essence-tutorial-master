// aを定義する（スクリプトスコープ）
let a = 2;
// 関数fn1を定義(スクリプトスコープ)
function fn1(){
  // 関数fn1の中に変数bと関数fn2を定義(関数スコープ)
  let b = 1;
  console.log(b);
  function fn2(){
    // fn2の中に変数cを定義
    let c = 3;
  }
  // ここでfn2を実行するとa,b,fn1を参照できる
  fn2();
}
// ここでfn1を実行するとa,fn1を実行できる
fn1();

// スクリプトスコープはどこからでも参照可能　=> 変数aはどこでも参照可
// 自身のスコープより外部のスコープを参照できる