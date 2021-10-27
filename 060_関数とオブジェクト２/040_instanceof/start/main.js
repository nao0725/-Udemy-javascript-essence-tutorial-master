// function F(a,b){
//     this.a = a;
//     this.b = b;
//     return {a:1};
// }

// F.prototype.c = function(){}
// const instance = new F(1,2);
// console.log(instance instanceof F);
// console.log(instance.__proto__ === Object.prototype);

function fn(arg){
    if (arg instanceof Array){
        // 条件分岐でArrayが配列の場合
        arg.push("value");
    } else {
        // 条件分岐で配列以外の場合（オブジェクト）
        arg["key"] = "value";
    }
    // argの結果が返ってくるように設定
    console.log(arg);
}
// 配列の場合：['value']と出力され0番にvalueが入っている
fn([]);
// オブジェクトの場合：{key: 'value'}と実行されオブジェクトにkey: "value"と値が入っている
fn({});
