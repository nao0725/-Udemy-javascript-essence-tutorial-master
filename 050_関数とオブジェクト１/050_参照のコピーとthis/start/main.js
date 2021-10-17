window.name = "John";
const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
        a();

        // さらにpersonを定義する
        const person = {
            // nameの値を「太郎」に変更
            name: '太郎',
            hello: function() {
                console.log('Hello ' + this.name);
                // ここでは上記同様に、Johnが呼ばれる
                // **関数**として実行される場合(26行目)
                a();
            }
        }
        // 再定義したpersonを実行すると"太郎"が呼ばれる
        // **オブジェクト**のメソッドとして実行される場合
        person.hello();
    }
}

function a(){
    console.log('Hello ' + this.name);
}

person.hello();
