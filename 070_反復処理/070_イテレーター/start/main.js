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
  [Symbol.iterator]: genIterator.bind(null, 5)
}

const set = new Set(obj);
// 0,1,2,3,4,..と出力される
console.log(set);

