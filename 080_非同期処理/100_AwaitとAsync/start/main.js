function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

async function init() {
  let val = await sleep(0);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  // ここでthrowを宣言すると
  throw new Error();
  return val
}

init().then(function(val){
  console.log("hello " + val);
  // catchに処理が移る
}).catch(function(e){
  // 5の個所でエラー表示がされる
  console.error(e);
})

// 基本的には、Promiseと挙動が同じ
