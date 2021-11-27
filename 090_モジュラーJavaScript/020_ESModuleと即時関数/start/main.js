const moduleA = (function () {

  console.log('IIFE called');

  let privateVal = 1;
  let publicVal = 10;

  function publicFn() {
    console.log('publicFn called: ' + privateVal++);
  }

  function privateFn() {

  }

  return {
    publicFn,
    publicVal
  }

})();

  // 以下のように即時関数を定義して格納する
  // 一般的には仮引数、実引数に値を入れて使用する
  const moduleB = (function(moduleA) {
    // 内部でmoduleAを使用
    moduleA.publicFn();
    moduleA.publicFn();
    moduleA.publicFn();
    console.log(moduleA.publicVal++)
    console.log(moduleA.publicVal++)
    console.log(moduleA.publicVal++)
  })(moduleA);
  
  // 省略して書くこともできる
  // moduleAはオブジェクトなので、直接publicFn, Valを分割代入可能
  const moduleB2 = (function( {publicFn, publicVal }) {
    // moduleAを使用していないのでmoduleAを削除
    publicFn();
    publicFn();
    publicFn();
    console.log(publicVal++)
    console.log(publicVal++)
    console.log(publicVal++)
  })(moduleA);

  // さらに名前をつけて書くことも可能

  const moduleB3 = (function( {publicFn: Fn, publicVal: Val }) {
    // このようにすると上記のmoduleB2と同じ結果が出力される
    Fn();
    Fn();
    Fn();
    console.log(Val++)
    console.log(Val++)
    console.log(Val++)
  })(moduleA);