
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
 * 	.multiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */


 class Calculator{
	constructor(number){
		this.number = null
	 //  アンダーバーがついているのはこのclassでしか使わないですよプライベートですよという暗示
		this._number;
	}

	set(number){
		if(this.number === null){
		 this.number = number;
		} else {
			this._number(this.number, number)
		}
		return this;
	}

	_equal(result){
	 this.number = result;
	 console.log(result);
 }

	plus(){
	 this._number = function(val1,val2){
		 const result = val1 + val2;
		 this._equal(result);
	 }
	 return this;
 }
 minus(){
	 this._number = function(val1,val2){
		 const result = val1 - val2;
		 this._equal(result);
	 }
	 return this;
 }
 multiply(){
	 this._number = function(val1,val2){
		 const result = val1 * val2;
		 this._equal(result);
	 }
	 return this;
 }
 divide(){
	 this._number = function(val1,val2){
		 const result = val1 / val2;
		 this._equal(result);
	 }
	 return this;
 }


}

const calc = new Calculator(10);

calc.set(10)
.minus()
.set(3)
.multiply()
.set(6)
.divide()
.set(2)
.plus()
.set(2)


