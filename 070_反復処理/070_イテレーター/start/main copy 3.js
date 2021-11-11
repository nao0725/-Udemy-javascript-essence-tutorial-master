function genIterator(max){
  let i = 0;

  return {
    next : function(){
      // if文を使ってループを終了する条件を作る
      // iがmax以上でループ終了
      if(i >= max){
        return{
          // trueの時はvalueの設定いらない
          done: true
        }
      // iがmax以下でループ継続
      } else {
        return {
          done: false,
          value: i++
        }
      }
    }
  }
}

const it = genIterator(10);
// itを初期化
let a = it.next();
// while文の条件として、aがfalseじゃないときループ終了と記載
while(!a.done){
  // 0から9まで出力される
  console.log(a.value);
  // 出力後a初期化(これがないと無限ループ)
  a = it.next();
}