// 関数を用意
// sleep関数が実行されるとms分だけメインスレッドを占有できる仕組み
// 実行されるとsleep doneと表示される
function sleep(ms) {
  const startTime = new Date();
  while (new Date() - startTime < ms);
  console.log('sleep done');
}

const btn = document.querySelector('button');
// ブラウザ上のボタンを押すとコンソール上にbutton clickedと表示される
btn.addEventListener('click', function(){
  console.log('button clicked');
});

// ここで3秒後に出力される
sleep(3000)
// この処理中にボタンを押してもsleep doneの後にbutton clickedが表示される
