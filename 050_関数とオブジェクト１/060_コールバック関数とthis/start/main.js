window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

// refという引数にコールバック関数が渡ってくるようにする
function fn(ref){
    ref();
}

// 実行結果は「hello John」と出力される(関数として実行しているから？)
fn(person.hello);

// メソッドを他の変数に代入していることと同じ
// refに渡ってくるのはpersonのhelloというプロパティが参照している先の関数
// refを実行するということは関数を実行していることになる
// 関数として実行した場合,thisにはグローバルオブジェクトの値が格納される(window)



