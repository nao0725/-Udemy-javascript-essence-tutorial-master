const targetObj = { a: 0 };
const handler = {
  // getでは値の取得が行われた際の検知ができるようになる
  // 値の取得なので新しい値は渡ってこない　＝　第三引数は削除（value）
  get: function (target, prop, receiver) {
    console.log(`[get]: ${prop}`);
    // returnで値を返す
    return target[prop];
  }
}

const proxy = new Proxy(targetObj, handler)
// [get]:aと出力される
proxy.a;

