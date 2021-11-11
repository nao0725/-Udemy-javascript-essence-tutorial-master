// 関数を準備
// maxというループの上限値を決める引数を設定
function genIterator(max) {
  // 初期値を設定
  let i = 0;

  return {
    next: function(){
      return {
        // falseの場合,ループ継続
        done:  false,
        // ループする度に（nextメソッドが呼ばれる度)1ずつプラス
        value: i++
      }
    }
  }
}

// 動作確認
// 変数itに関数genIteratorを格納
const it = genIterator();
// nextメソッドを使用してdoneとvalueの値が返却される
console.log(it.next());
// 呼ばれる度にvalueの値が増えていく
console.log(it.next());
console.log(it.next());
