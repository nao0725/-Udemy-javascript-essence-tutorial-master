class Person2 {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	get name() {
		return this._name;
	}

	set name(val){
		this._name = val
	}

	static go(){
		// 出力したい結果を入れておく
		console.log("いけ！");
	}
}
// goメソッドを呼び出して使用できる
Person2.go();
const a = new Person2("フシギダネ", 2);
console.log(a.name);