// moduleAという変数に対して、即時関数が定義されている
const moduleA = (function () {

  console.log('IIFE called');

  let privateVal = 1;
  let publicVal = 10;

  function publicFn() {
    console.log('publicFn called: ' + publicVal);
  }

  function privateFn() {

  }
  // 戻り値を定義しているので、以下のオブジェクトがmoduleAに返る
  return {
    publicFn,
    publicVal
  }
})();
