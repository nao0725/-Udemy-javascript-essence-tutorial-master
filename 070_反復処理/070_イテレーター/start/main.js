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

const obj = {
  // 第一引数はthisの値ですがないのでnull,第二引数にループ回数を設定する
  [Symbol.iterator]: genIterator.bind(null, 100)
}

for(const i of obj){
  // 99まで出力される
  console.log(i);
}

