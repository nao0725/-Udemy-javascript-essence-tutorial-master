// window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
// 引数にnameを入れる（中身のthisを削除した）
function a(name){
    console.log("hello " + name);
}
// 関数内でthisが使用されていないので,第一引数は必要ない => nullとしておく
// 第２引数として関数の引数を渡すことでbindをかけられる
const b = a.bind(null, "次郎");
// 「hello 次郎」と出力
b();
// もし、bに引数を渡したとしてもbindが優先される
b("三郎");


