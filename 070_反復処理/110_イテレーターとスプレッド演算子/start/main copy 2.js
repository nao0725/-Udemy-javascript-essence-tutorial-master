// 関数を一つ定義し、引数にレストパラメーターを持たせる
// 渡ってきた引数を...argsの配列にまとめる
function sum(...args){
  // 初期値を設定
  let ret = 0;
  // for...ofで渡ってきた配列の値を一つひとつ抽出
  for(let v of args){
    // 1~4がvに格納されていることわかる
    // console.log(v);
    // ret + vが繰り返される
    ret += v;
  }
  // sumに値を返却する
  return ret;
}
// 引数に渡す値
const result = sum(1,2,3,4);
// 10と出力される
console.log(result);