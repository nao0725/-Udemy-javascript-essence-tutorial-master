// 関数a,bを用意
function a() {
  setTimeout(function task1() { 
    console.log('task1 done');
  });

  console.log('fn a done');
}

function b() {
  console.log('fn b done');
}

a();

b();

// それぞれfn a done, fn b done, task1 doneの順で出力される