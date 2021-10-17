// 引数に名前を設定する
// helloの引数にnameを設定
function hello(name){
  // コンソールにhello + nameが出力される
  console.log("hello" + name);
}

function bye(){
  console.log("bye")
}

function fn(cb){
  // 引数に呼び出される名前を設定
  cb("Tom");
}

fn(hello);
fn(bye);

// 宣言する際の実引数と実行する際の仮引数が一致している必要はない
// だからbyeに影響を受けていない

// 無名関数でも定義が可能
// helloと実行される
fn(function (){
  console.log("hello");
})
// 引数を入れて実行することも可能
fn(function(name){
  console.log("bye" + name);
})

// setTimeoutはJavascript側で用意されているWebAPIの１つ
setTimeout(hello, 2000);
// ここでは実引数がないため「hello undefined」と出力される
// 2000はミリ秒数　コンソールに２秒遅れて出力される