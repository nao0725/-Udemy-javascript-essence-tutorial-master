// 関数は実行可能なオブジェクトである

function a() {
  console.log("hello");
}

a.prop = 0;
a.method = function(){
  console.log("メソッド")
}

a();
a.method();
console.log(a.prop);