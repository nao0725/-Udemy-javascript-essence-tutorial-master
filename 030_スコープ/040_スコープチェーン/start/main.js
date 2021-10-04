// スクリプトスコープ
let a = 2;
// グローバルスコープ
window.a = 4;
function fn1(){
    // let a = 1;
    function fn2(){
        console.log(a);
        if (true){
            var a = 3;
        }
        // var = 3;のホスティングが働いてしまうのでundifinedと出力される
        // ホスティングとはコンテキスト内で宣言した変数や関数の定義をコード実行前にメモリーに配置すること
    }
    fn2();
}
fn1();
