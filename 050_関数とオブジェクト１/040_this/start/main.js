// this
// 関数内で使える
// 呼び出し元のオブジェクトへの参照を保持するキーワード

// personというオブジェクトを設定
const person = {
    // nameとhelloをそれぞれ設定
    name: 'Tom',
    hello: function() {
        // この場合,thisがpersonを参照しているpersonオブジェクトの中のnameを呼び出す
        console.log("Hello" + this.name);
    }
}
// helloを実行「Hello Tom」と出力
person.hello();

// helloで定義した関数内からみて外部の関数スコープ
// 　＝レキシカルスコープがpersonにあたるので値を取得できる


// thisの参照先は実行コンテキストによって変わる