// 関数外で変数を宣言
const a = 0
function fn(){
  console.log(this);
  // レキシカルスコープは使用可能
  console.log(a);
}
fn();

const obj = {
  fn
}
obj.fn();


