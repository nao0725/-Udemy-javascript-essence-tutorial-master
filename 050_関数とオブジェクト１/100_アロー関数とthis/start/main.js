window.name = 'ルフィ';
const person = {
    name: 'ゾロ',
    hello(){
        console.log('Hello ' + this.name);
    }
}

function b() {
    // thisの参照先はwindowオブジェクト
    const a = () => console.log("Bye " + this.name);
    a();
}
// 出力結果はBye　ルフィ
b();