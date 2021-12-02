const targetObj = { a: 0 };
const handler = {
  get: function (target, prop, receiver) {
    console.log(`[get]: ${prop}`);
    return target[prop];
  },
  // 下記のdeleteでは値が削除された際の検知を行う
  // deletePropertyの場合にはreceiverは渡ってこないので削除
  deleteProperty: function (target, prop) {
    console.log(`[delete]: ${prop}`);
    // deleteとして値を削除
    delete target[prop];
  }
}

const proxy = new Proxy(targetObj, handler);
proxy.a;
// delete aと出力される
delete proxy.a;
// targetObjの中身をコンソールで確認してみるとオブジェクトの中身も削除されている

