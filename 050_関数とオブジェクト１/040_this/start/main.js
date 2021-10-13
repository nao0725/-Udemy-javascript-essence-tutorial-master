// this
// 関数内で使える
// 呼び出し元のオブジェクトへの参照を保持するキーワード

const person = {
    name: 'Tom',
    hello: function() {
        console.log("Hello" + this.name);
    }
}

person.hello();


// thisの参照先は実行コンテキストによって変わる