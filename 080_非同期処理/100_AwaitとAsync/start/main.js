function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

// 先頭にasyncとつけた関数を用意
async function init(){
  // 中でawaitを使う
  await sleep(0);
}
// initを実行すると0と出力される
init();