let c = (function(){
  console.log("called");
  // 変数privateValを定義 関数内でしか使えない
  let privateVal　 = 0;
  // 変数publicValを定義　これは関数の外で使えるようにしたい
  let publicVal = 10;

  // 関数も上記の様に生成
  function privateFn(){
    console.log("privateFn is called");
  }
  function publicFn(){
    console.log("publicFn is called");
  }

  // 戻り値を設定してこの結果が変数cに格納される
  return {
    privateVal,
    publicFn
  };
})()

// 関数の外から下記のように呼び出すとコンソールに出力される
c.publicFn();
console.log(c.publicVal);

// c.privateValと書くことはできない
