// moduleAの値をそのままコピー
  console.log('ES Module called');

  let privateVal = 1;
  // publicとあるものは外部に露出したいので（ファイルの外で使いたい）exportをつける
  // 渡す時にエラーが発生しないようにプリミティブ型でなくオブジェクトとして定義する
  export let publicVal = { prop : 10 };

  export function publicFn() {
    console.log('publicFn called: ' + privateVal++);
  }

  function privateFn() {

  }


