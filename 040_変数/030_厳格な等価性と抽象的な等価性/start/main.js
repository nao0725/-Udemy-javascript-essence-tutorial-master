 function printEquality(a,b){
// 厳格な等価性で比較　数値と文字列で不一致（false）
  console.log(a === b);
  // 抽象的な等価性　中身は一緒なので一致（ture）
  console.log(a == b);
 }
 
// //文字列
//  let a = "1";
// //数値
//  let b = 1;

// // 　下記の場合厳格な等価性ではfalse(trueは型がBoolean)
//  let c = true;
//  printEquality(b,c)
// //  もし暗黙的な型変換から厳格な等価性をするとtrueになる
//  console.log ( b === Number(c)); 
 
// 下記の場合は厳格な等価性がfalse, 抽象的な等価性はtrue
// 文字列と数値なので厳格にはfalse
 let e = "";
 // Number("")とコンソールで出力すると0と出力されるので抽象的にはture
 let f = 0;
 
 printEquality(e,f);


//  let g = "0";
//  printEquality(f,g);

//  nullやundifinedも0とみなしtrueで返す
// 基本的には厳格な等価性を使うべき