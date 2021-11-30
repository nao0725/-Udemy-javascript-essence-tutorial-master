// 下記は両方ともundefinedと出力される
// コンストラクターもメソッドも内部で宣言した関数内のthisが表示されない
class C {
    constructor() {
        function fn() {
            console.log(this)
        }
        fn();
    }

    method() {
        function fn() {
            console.log(this)
        }
        fn();
    }
}

const c = new C();
c.method();
