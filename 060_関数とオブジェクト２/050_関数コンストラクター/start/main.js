// // 関数スコープ外にdを別に定義
// let d = 0;
// function fn(){
//   let d = 1;
//   const fn1 = new Function("a", "b", "return a * b * d");
//   // fn()にfn1の値を戻す
//   return fn1;
// }
// // fn()の値(fn1の値)をfに入れる
// const f = fn();
// const result = f(1,2);
// // 実行結果は0となる
// console.log(result);
// // なぜそうなるのか
// // a=1, b=2 d=0 が代入されている
// // つまり、関数スコープ内の1ではなく、スクリプトスコープの0が使われている

// // function fn2(a,b){
// //   return a + b ;
// // }
// // console.log(fn2 instanceof Function)

const obj = new function(){
  this.a = 0;
}
// 引数にそのままthis.a = 0;を代入する
const fn3 = new Function("this.a = 0");
// fn3を更にnew(インスタンス化)する
const obj3 = new fn3();
// {a: 0} {a: 0}と出力される
console.log(obj, obj3);
