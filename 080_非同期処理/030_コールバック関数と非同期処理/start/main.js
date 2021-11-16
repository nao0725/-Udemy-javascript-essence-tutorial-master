// aの関数の引数に関数bを入れる
function a(b) {
  setTimeout(function task1() { 
    console.log('task1 done');
    // ここで実行することでtask1の後に関数bが実行される
    b();
  });

  console.log('fn a done');
}

function b() {
  console.log('fn b done');
}

// ブラウザ上でも順序が入れ替わっている
a(b);

// b();

