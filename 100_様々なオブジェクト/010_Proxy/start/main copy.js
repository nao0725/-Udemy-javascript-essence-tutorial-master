// オブジェクトを変数に格納
const targetObj = { a: 0 };
const handler = {
  // setというメソッドを登録する（トラップとも呼ばれる）
  // 第一引数にはtargetObjが渡ってくる
  // 第二引数にはプロパティにアクセスされた際のプロパティの名前が渡ってくる
  // 第三引数にはsetの場合には新しい値が渡ってくる
  // 第四引数はnew Proxyのオブジェクト（proxy）が渡ってくる
  set: function (target, prop, value, receiver) {
    // Proxy経由で値が呼ばれた際に、setのトラップが呼ばれているのか確認する
    console.log(`[set]: ${prop}`);
    // 下記を定義することで新しい値を設定できるようにする（a = 1と表示される）
    target[prop] = value;
  }
}
// new演算子でProxyを定義し変数に格納
// 第一引数に定義したオブジェクトを入れる
// 第二引数にはhandlerというtargetObjを操作した際に実行されるメソッドを格納したオブジェクトを入れる(上記)
const proxy = new Proxy(targetObj, handler)
// ここで出力結果が[set]:aとなるのでproxy経由で呼ばれていることがわかる
proxy.a = 1;