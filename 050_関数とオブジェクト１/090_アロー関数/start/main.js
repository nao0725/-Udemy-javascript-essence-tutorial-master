// 一般的な関数
function a(name){
  return "hello " + name;
}

// 関数式にした場合
const b = function(name){
  return "hello " + name;
}

// 上記をアロー関数に直すと下記の通り
const c = name => "hello " + name;

// functionを削除して、{}の前に=>を置く
// 引数が１つの場合()は省略できる
// 実行行が一行の場合は{}が省略できる
// そうすると変数cにアロー関数が代入される
console.log(c("炭治郎"));

// ()で引数を囲い、第二引数を用意
const d = (name, name1) => "hello " + name + ", " + name1
console.log(d("善逸", "伊之助"));

// 引数がなくても()の省略は不可
const e = () => "hello";
console.log(e());

// （）ではなく_でも代用可
const f = _ => "hello";
console.log(f());

// 複数行ある場合は{}使う
// {}がある場合はreturn省略不可
const g = () => {
  const h = "うまい！" + "うまい！";
  return h;
}
// 実行結果は「うまい！うまい！」となる
console.log(g())