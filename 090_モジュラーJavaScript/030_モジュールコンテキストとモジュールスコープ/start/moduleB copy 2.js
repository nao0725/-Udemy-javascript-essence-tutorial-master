function fn(){
  console.log(this);
}
fn();
// objの中に格納した場合
const obj = {
  fn
}
// fnはobjのメソッドとして使える
obj.fn();
// 呼び出し元のobjのことを参照する