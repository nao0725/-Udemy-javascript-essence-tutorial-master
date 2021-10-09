// 0なのでfalseと等価
let a = 0;
console.log(Boolean(a));

let b = ""
console.log(Boolean(b));

let c = NaN;
console.log(Boolean(c));

 let d = 0n;
 console.log(Boolean(d));
 //  上記はすべてコンソールでfalseとして出力される

 let e = parseInt("");
 console.log(e);
//  上記はparseIntで整数として定義しているが空文字は数字に置き換えられないので、
// 出力結果はNan(Not a Number)となる
// よって下記の場合はfalseと出力される
// console.log(Booolean(e));

// 変数がfalseyかどうかif文で確認する
// もしaを下記のif文にかけて実行するとfalseなので"bye"と出力される
 if(a){
   console.log("hello");
 } else {
   console.log("bye");
 }