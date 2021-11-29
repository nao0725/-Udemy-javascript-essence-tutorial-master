/**
 * 問題：
 * 引数で与えた範囲の値をステップ毎に返却する
 * genStepというジェネレーター関数を作成しましょう。
 * 
 * - genStepの要件
 * 引数にmin, max, stepを取ります。
 * min：下限値
 * max：上限値
 * step：ステップ
 * 
 * 以下のように実行した場合には
 * const it = genStep({min: 4, max: 10, step: 2});
 * 
 * for(let value of it) {
 *   console.log(value); -> 4, 6, 8, 10
 * }
 * 
 * の値が順番にコンソールに表示されます。
 */

// 【自分の回答】
// const obj ={
//   [Symbol.iterator]: function* genStep(min = 4, max = 10, step = 2){
//   let i = 0;

//   while(i < max){
//     yield i++
//   }
//     return;
//  }
// }

// for(let value of obj) {
//   console.log(value);
//  }


// 引数の値は適当
function* genStep({min = 0, max = 20, step = 1} = {}){
  for(let i = min; i < max; i += step){
    yield i;
  }
}

const it = genStep({min: 4, max: 10, step: 2});

for(let value of it) {
  console.log(value);
 }