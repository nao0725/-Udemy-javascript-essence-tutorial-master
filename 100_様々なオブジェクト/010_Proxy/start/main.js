const targetObj = { a: 0 };
const handler = {
  set: function (target, prop, value, receiver) {
    console.log(`[set]: ${prop}`);
    // setのトラップが呼ばれた際にErrorが発生するようにする
    throw new Error(`cannot add prop`)
    // deleteでも削除不可にできる
  }
}

const proxy = new Proxy(targetObj, handler);
// 以下でaの値を1に変更使用としてもエラーが発生し変更できない
proxy.a = 1;
