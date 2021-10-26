// function F(a,b){
//   this.a = a;
//   this.b = b;
//   return {};
// }
// const instance = new F(1,2);
// console.log(instance);

// // 関数を定義
// function F(a,b){
//   this.a = a;
//   this.b = b;
//   // 戻り値にreturnで、空のオブジェクトを設定
//   return {};
// }
// // インスタンス化
// const instance = new F(1,2);
// // この結果を出力すると{｝からのオブジェクトが出力される
// console.log(instance);
// // 戻り値{}がFに返ってきているから？？

// function F(a,b){
//   this.a = a;
//   this.b = b;
//   // オブジェクトではなくプリミティブ型で戻り値を設定
//   return 1;
// }
// const instance = new F(1,2);
// // 実行結果はF {a: 1, b: 2}となる
// console.log(instance);

// function F(a,b){
//   this.a = a;
//   this.b = b;
//   return {};
// }

// F.prototype.c = function(){}

// // 第一引数をコンストラクタの「C」として定義
// // 第二引数以下はコンストラクタ関数の引数によって変わってくるので...(レストパラメーターズ)と
// // 可変長の引数（固定ではなく任意の個数の引数）を表すためにargsを使用
// function newOpe(C, ...args){
//   // 出力結果は以下の通り（上記のように表すと引数が配列として返ってくる）
//   console.log(args);
// }

// // F(1,2)を削除し、新たにnewOpeという関数を定義
// // 第一引数にコンストラクタ関数
// const instance = newOpe(F,1,2)
// console.log(instance);


function F(a,b){
  this.a = a;
  this.b = b;
  // return {};
}

// thisというオブジェクトをprototypeの参照を保持したまま生成する
F.prototype.c = function(){}

function newOpe(C, ...args){
  // 空のオブジェクト_thisを定義　createメソッドを使って渡ってきたCのprototypeをコピー
  const _this = Object.create(C.prototype);
  // Cを実行するとき_thisは関数Fのオブジェクト,argsは配列としてa,bが渡ってきている
  // それを変数resultに格納
  const result = C.apply(_this, args);
  console.log(result, _this);
  // 戻り値でnewOpeに_thisの値を返す
  return _this;
}

const instance = newOpe(F,1,2);
// 実行結果がF {a: 1, b: 2}となる
console.log(instance);