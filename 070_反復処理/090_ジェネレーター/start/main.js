function* gen(){
  yield 1; //①
  yield 2; //②
  return 3; //③
}

// 変数にgen()を格納
// ジェネレーター関数を実行することでイテレーターが帰ってくる
const it = gen();
// イテレーターのnextメソッドを使用
console.log(it.next());
console.log(it.next());
console.log(it.next());
// {value: 2, done: false} →　①のyield
// {value: 2, done: false} →　②のyield
// {value: 3, done: true} →　③のyield
// 上記のように出力される
