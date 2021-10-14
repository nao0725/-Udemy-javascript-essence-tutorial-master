let a = 0;

// 関数の引数としてaを渡したい
function fn1(arg1){
  arg1 = 1;
  console.log(a, arg1);
}
// 引数aを入れて実行すると,(0,1)と出力される
let arg1 = a;
arg1 = 1;
console.log(a,arg1)
fn1(a);



let b = {
  prop: 0
}

function fn2(arg2){
  arg2.prop = 1;
  console.log(b, arg2);
}
// 実行結果は{prop: 1}になる
// fn2(b);
// つまり引数に渡したbというオブジェクトの参照が
// arg2にコピーされ、bと同じオブジェクトへの実体への参照を保持しているため
// プロパティの値を変更するとbの値にも影響が出る





// 中でarg2にオブジェクトを渡すと
function fn3(arg2){
  arg2 = {};
  console.log(b, arg2);
}
// この結果は{prop: 0} {}となる
fn3(b);

// この場合、bに影響は出ないがarg2だけ変更される
// 値がコピーされているのか、参照がコピーされるかで結果が変わる
