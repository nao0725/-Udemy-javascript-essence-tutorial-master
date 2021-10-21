
// function a(name,name1){
//     console.log("hello " + name + ", " + name1);
// }
// const kill = {name: "キルア"};

// a.apply(kill, ["キルア", "アルカ"]);

// 配列を定義
// １番大きい数字を取り出したい
const array = [1,2,3,4,5];
// Mathオブジェクトのメソッドmaxを使うとコンソールで2と出力される
Math.max(1,2)
// 数が多く展開するのが面倒な時applyを使う
// 第一引数にthisは必要ないのでnullにしておく
// 第二引数は配列を定義し、それを変数に代入
// const result = Math.max.apply(null, array);
// // ５と出力される
// console.log(result);

// ES６以降では下記のように使う
// ...を３つ書くとMathの引数を１つずつ展開するという操作が行われる(apply消す)
const result = Math.max(...array);
console.log(result);


// // nameの他に,name1を定義
// function a(name,name1){
//     console.log("hello " + name + ", " + name1);
// }
// const kill = {name: "キルア"};

// // 配列の場合[]に入れ,name1がアルカにあたる
// // 配列が展開されてそれぞれaの引数に渡っていく
// a.apply(kill, ["キルア", "アルカ"]);

// function a(){
//     console.log("hello " + this.name);
// }
// // bindの中身のオブジェクトを変数killに格納
// const kill = {name: "キルア"};

// // bindの場合はb();がないと実行されなかった
// const b = a.bind(kill);
// b();
// // applyの場合は第一引数に変数をいれれば実行までしてくれる
// a.apply(kill);
// // callの場合も同様
// a.call(kill);

// function a(name){
//     // thisを削除して関数の引数にnameを定義
//     console.log("hello " + name);
// }
// const kill = {name: "キルア"}// 第２引数に「キルア」と入れると「hello キルア」と実行される
// a.call(kill, "キルア");