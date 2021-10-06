
// 関数addNumberFactory内に更に関数addNumberを定義
// 更にそれぞれに引数num,valをもたせる
function addNumberFactory(num){
  function addNumber(value){
    // 戻り値の作成
    return num + value;
  }
  // addNumberFactoyにaddNumberを返す
  return addNumber;
}

// add5変数にnumに５を代入した関数addNumberFactoryを定義
const add5 = addNumberFactory(5);
// 更にその値を変数resultに引数valを10にして代入
// 変数numに5が設定されている + value10を渡すので15と出力される
const result = add5(10);
// このようにすると15と出力される
console.log(result);

// このように渡す値によって生成される関数が変わってくる