function genIterator(){
  // 下記のgenIteratorに返却されている部分をイテレーターと呼ぶ
  return {
    // イテレーターは必ずnextメソッドを保持する
    next: function(){
      // オブジェクトを返却
      return {
        // ループを継続するかどうか
        done: true/false,
        // 返却する値
        value: 値
      }
    }
  }
}