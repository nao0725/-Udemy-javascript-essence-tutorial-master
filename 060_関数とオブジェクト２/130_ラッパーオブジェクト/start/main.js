// コンストラクター関数を定義
// new演算子でStringを初期化
const a = new String("Hello");
// HELLOと大文字で出力される（大文字にするメソッド）
console.log(a.toLocaleUpperCase());

// 数値を引数に設定
const b = new Number(100);
// Number {100}という数値をもったオブジェクトが出力される
console.log(b);
// 試しにtoExponentialというメソッドを使用すると
console.log(b.toExponential());
// 1e+2と出力される（10の二乗を意味する）

// new Stringを省略
const a2 = "hello";
// この場合でもString型であると認識し、toLocaleUpperCaseを使用できる
console.log(a2.toLocaleUpperCase());
// 下記のように書くことも可能
const a3 = "hello".toLocaleUpperCase();
// 同様にHELLOとシュル力される
console.log(a3);
// 数値も同様