// // // 関数を定義
// // function fn(a,b) {
// //   console.log(a,b);
// // }
// // // 同じ名前の関数を用意
// // function fn(a,b) {
// //   console.log(2);
// // }
// // // この場合、実行結果は2と出力される
// // fn(1)

// // 下記のように関数式で定義すると
// // constによってsyntax errorが発生する
// // 基本的には無名関数で書くのでfunctionの後ろのfnは削除（あっても動く）
// const fn = function (a,b) {
//   console.log(a,b);
// }

// function fn(a,b) {
//   console.log(2);
// }

// fn(1)

// // javascriptでは引数が違くても関数で判断されるので注意
// // エラーも発生しない

// // bに予め値を渡しておく　＝＞　default値
// function fn(a,b = 1) {
//   console.log(a,b);
// }
// // nullだと「null」で返ってくる
// fn(1, null);
// // undefinedだとそのままdefault値が返ってくる
// fn(1,undefined);

// // 書き方は基本的にしない
// let c = undefined;
// fn(1,c);
// // こっちが一般的
// let d = null;
// fn(1,d);

function fn() {
  const a = arguments[0];
  const b = arguments[1];
  // このようにaという値を呼び出し元関数fnに戻す
  return a;
}
// 下記でcに関数を渡す
let c = fn(1, undefined);
// returnによりfnにはaが入っているので、下記の実行結果は1になる
console.log(c);