let a = 2;
function fn1(){
  let b = 1;
  console.log(b);
  function fn2(){
    let c = 3;
  }
  fn2();
}
fn1;