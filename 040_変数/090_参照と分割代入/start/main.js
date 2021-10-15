
const a = {
  prop: 0
}
// 分割代入
// プロパティの名前と変数の名前は一致させる
let { prop } = a;
prop = 1;
// ここで出力されるのは{ prop : 0}と1となる
// 分割代入により変数propの値に1が代入されている
// 最初に定義した{prop}には影響を受けない
console.log(a, prop);


// 関数fnを定義
// 下記のようにすると渡ってきたオブジェクトがこの時点で分割代入で展開されて、propという変数が使用できるようになる
// オブジェクトの中身は変更されない
function fn({ prop } ){
  // 変数の値を変更
  prop = 1;
  // 結果を出力
  console.log(a, prop);
}
// { prop : 0}と1と出力される
fn(a);



// function fn({ prop }){
//   prop  = 1;
//   console.log(a, prop);
// }

// fn(a);

// cがprop1を格納しており、さらにprop2を格納している状態
const c = {
  prop1: {
    prop2: 0
  }
}
// 分割代入
let {prop1} = c;
// prop1を出力すると{prop2: 0}と出力される
console.log(prop1);
// その中身のprop2の値を変更すると
prop1.prop2 = 1;
// 結果はprop1の中身のprop2の値が1になる
// cからprop1の値を抽出した時点で、参照自体が保持される
console.log(c, prop1);