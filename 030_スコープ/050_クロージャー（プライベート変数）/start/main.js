let num = 0;

increment();
increment();
increment();

function increment(){
  // 変数numが１ずつ増えていく（省略形）
  // num変数に１ずつ代入されていく
  num += 1;
  console.log(num);
}

// 例えば関数を呼び出した後に再度同じ値で関数を再定義すると初期化されて、また1から呼び出されていく
num = 0
increment();