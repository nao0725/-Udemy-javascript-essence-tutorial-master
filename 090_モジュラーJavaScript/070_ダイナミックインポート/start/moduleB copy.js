// // importを使用した場合
// import { publicFn, publicVal } from './moduleA.js';
// // moduleAで定義した通りpublicFn called'と出力される
// publicFn();

// importという関数を宣言する
// 引数にはファイル名を記述し、Promiseが帰ってくるので、thenメソッドで繋げる
// thenの中に関数を定義し、中身を確認する
import('./moduleA.js').then(function (modules) {
  // publicFnやpublicValが入ったオブジェクトが以下のように返ってくる
  console.log(modules);
  // それを使って出力結果を表示する
  modules.publicFn();
  // public calledと出力される
})


// // Module {Symbol(Symbol.toStringTag): 'Module'}
// default: (...)
// publicFn: (...)
// publicVal: (...)