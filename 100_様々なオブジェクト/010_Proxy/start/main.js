const targetObj = { a: 0 };
const handler = {
  get: function (target, prop, receiver) {
    // if文を使用する
    // 最初の条件は自分自身のプロパティにpropの名前が見つかった場合
    if(target.hasOwnProperty(prop)){
      // returnで返す
      return target[prop]
    } else {
      // 見つからなかった場合にはデフォルト値を返す
      // 数値はなんでも可
      return -1;
    }
  }
}

const proxy = new Proxy(targetObj, handler);
// elseの方に条件が分岐するので　-1と出力される
console.log(proxy.b);
