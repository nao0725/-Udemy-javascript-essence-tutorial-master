function* genIterator(max = 10){
  let i = 0;
  while(i < max){
    yield i++;
    }
    return ;
  }

const obj = {
  // SymbolのイテレーターにgenIteratorを追加
  [Symbol.iterator]: genIterator
}
// for...ofを使用して出力しても同じ結果に
// ジェネレーターでは反復可能オブジェクトを作成せずにofの後ろに直接genIteratorを入れて実行しても使える
for(const i of obj){
  console.log(i);
}