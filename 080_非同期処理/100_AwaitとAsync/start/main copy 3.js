function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

async function init(){
  // 変数に格納してみる
  let val = await sleep(0);
  // valには1が格納されている
  // Promise構文のresolveのvalが渡されている
  console.log(val);
}

init();