// function hello(name){
//   // name = name || "Tom";
//   console.log("Hello" + name);
// }
// // hello Bobと表示される
// hello("Bob")
// // 引数がない場合、Hello undefinedと表示される
// hello()

// function hello(name){
//   // nameがundifine = falseな値である場合にTomと出力されればいいので
//   // NOT演算子を条件式に加える
//   if(!name){
//     name = "Tom"
//   }
//   console.log("Hello" + name);
// }
// // 結果、ここでは「Hello Tom」と出力される
// hello()

// function hello(name){
//   // OR条件の場合、trueな値が見つかった時点で出力する
//   // name = name || "Tom";
//   console.log("Hello" + name);
// }
// // nameはundifined(空欄)なのでfalse,結果Tomが出力される
// hello()
// // ここではnameに”Bob”が入っているので上記のnameがtrueになった時点で出力されている
// hello("Bob")

// ES6からはデフォルト引数が設けられるため以下でも同じ意味になる
// function hello(name = "Tom"){
//   // name = name || "Tom";
//   console.log("Hello" + name);
// }
// // nameがTomじゃないからBobが出力される
// hello("Bob")


// ES6からはデフォルト引数が設けられるため以下でも同じ意味になる
// function hello(name = "Tom"){
//   // name = name || "Tom";
//   console.log("Hello" + name);
// }
// // nameがTomじゃないからBobが出力される
// hello("Bob")


// function hello(name){
//   name = name || "Tom";
//   console.log("Hello" + name);
// }
// // この場合、「Hello 0」と出力したいが
// // 0はfalseな値なのでTomと出力される
// hello(0)


// function hello(name){
//   name = name || "Tom";
//   console.log("Hello" + name);
// }
// hello()

// let name = "Bob"
// if(name){
//   hello(name);
// }


// nameがtrueである場合、Bobを呼ぶようにしたい
// if文でも書くことができるが、AND条件を用いて簡略化すると


function hello(name){
  name = name || "Tom";
  console.log("Hello" + name);
}
hello()
// 試しに下記のように、"Bob"を消してみると
let name 
// nameはfalseになるので、処理がそのまま通過し、上記のhello()のみになる
name && hello(name)

// function hello(name){
//   name = name || "Tom";
//   console.log("Hello" + name);
// }
// hello()
// let name = "Bob"
// // 下記のように記述すると最初のnameがfalseの場合、次のhello(name)は実行されない
// name && hello(name)








// // // if(name){
// // //   hello(name);
// // // }

// // // let name;
// // // name && hello(name);

