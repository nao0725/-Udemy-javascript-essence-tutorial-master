// さらに省略してジェネレーターを反復可能オブジェクトに入れることも可能
const obj = {
  // genIteratorもfunctionも不要
  // *は先頭につけて省略
   ✴︎[Symbol.iterator]:(max = 10){
    let i = 0;
    while(i < max) {
      yield i++;
      }
      return ;
    }
}


for(const i of obj){
  console.log(i);
}