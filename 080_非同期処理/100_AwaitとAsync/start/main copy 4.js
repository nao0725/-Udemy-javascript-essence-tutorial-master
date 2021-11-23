function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

async function init(){
  let val = await sleep(0);
  // 上記変数式をコピーし、sleepの引数をvalとする
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  // 1,2,3...と出力されるようになる
  console.log(val);
}

init();

// 関数ないでawaitを使用している場合が必ずasyncセット（非同期を照明するため）
// asyncは関数コンテキストのみで使える