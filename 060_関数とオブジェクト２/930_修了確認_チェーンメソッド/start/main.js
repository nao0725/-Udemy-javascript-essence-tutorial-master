/**
 * 問題：
 * 電卓の入力と同じような挙動をするチェーンメソッド
 * を作成してみましょう。
 * 
 * 例えば、次のように使用し、結果が表示
 * されるようにします。
 * 
 * 
 * 例１）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * .minus()
 * .set(3) -> '7'を出力(10 - 3)
 * 
 * 例２）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * 	.minus()
 * 	.set(3) -> '7'を出力
 * 	.mutiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */

class Calculator{
	constructor(number){
		this.number = number;
	}

	set(number){
		console.log(number)
	}

	minus(){
		console.log(this.number);
		return this;
	}

	mutiply(){
		console.log(minus() * this.number);
		return this;
	}

	divide(){
		console.log(mutiply() / this.number);
		return this;
	}

	plus(){
		console.log(divide() + this.number);
		return this;
	}
}

const calc = new Calculator(10);

calc.set(10)
	.minus()
	.set(3)
	.mutiply()
	.set(6)
	.divide()
	.set(2)
	.plus()
	.set(2)
