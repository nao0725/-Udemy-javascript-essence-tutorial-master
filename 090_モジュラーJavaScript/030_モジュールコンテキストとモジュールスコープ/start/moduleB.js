// thisを出力してもundefinedと出力される
console.log(this);
// 関数でも同様
function fn(){
  console.log(this);
}
// moduleを使わない場合にはwindowオブジェクトが取れていた
fn();