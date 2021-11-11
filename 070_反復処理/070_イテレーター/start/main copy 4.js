// このようにmaxに値を渡さないと上限値が設定できない
function genIterator(max = 10){
  let i = 0;

  return{
    next: function(){
      if(i >= max){
        return{
          done: true
        }
      } else {
        return{
          done: false,
          value: i++
        }
      }
    }
  }
}

// オブジェクトを定義
const obj = {
  [Symbol.iterator]: genIterator
}
// このようにするとobjをfor文で使用できるが、上限値の設定ができないためmax = 10として値を設定した
// for文に追加
for(const i of obj){
  // 0から9まで出力される
  console.log(i);
}

