const moduleA = (function () {

  console.log('IIFE called');

  let privateVal = 1;
  let publicVal = 10;

  function publicFn() {
    // privateValが1ずつカウントアップする仕組みがある
    console.log('publicFn called: ' + privateVal++);
  }

  function privateFn() {

  }

  return {
    publicFn,
    publicVal
  }

})();

  // 下記のようにするとpublicFnを実行できる
  // privateFn, privateValは外部から呼べない
  moduleA.publicFn();
  // 1ずつ増えていく
  moduleA.publicFn();
  moduleA.publicFn();
  // 下記のようにすると10という値が取れてくる
  console.log(moduleA.publicVal++)
  // こちらも++すると11,12とカウントアップする
  console.log(moduleA.publicVal++)
  console.log(moduleA.publicVal++)