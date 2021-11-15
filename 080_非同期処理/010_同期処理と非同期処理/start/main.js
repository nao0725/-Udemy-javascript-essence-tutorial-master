function sleep(ms) {
  const startTime = new Date();
  while (new Date() - startTime < ms);
  console.log('sleep done');
}

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  console.log('button clicked');
});

// 2秒待ってからsleep実行する
setTimeout(function(){
  sleep(3000)
},2000)
// 上記のようにすると第二引数で与えた分だけメインスレッドが解放される
// ボタンを連続で押すと2秒後に処理が止まりsleep doneが出力された後、クリックした分が表示される