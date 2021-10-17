// helloと出力される関数を用意
function a() {
  console.log("hello");
}
// propには0を、methodでは「メソッド」と出力されるように設定
a.prop = 0;
a.method = function(){
  console.log("メソッド")
}

// 実行すると下記のようにそれぞれ出力される
// hello
a();
// メソッド
a.method();
// 0
console.log(a.prop);

// このように関数宣言によって宣言した関数を
// dot記法を使ってプロパティやメソッドが使用できる
// ()をつけると関数が実行される