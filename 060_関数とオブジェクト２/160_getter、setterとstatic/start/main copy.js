function Person1(name, age) {
	this.name = name;
	this.age = age;
}

// ディスクリプターを設定
// Person1のnameプロパティの設定値をsetter,getterにする
Object.defineProperty(Person1.prototype, "name", {
	// getが呼ばれた際の挙動を書く
	get: function () {
		return this._name;
	},
	// setには引数を設定
	set: function(val){
		this._name = val
	}
})

// 上記のgetとsetをどのように使うのか
// インスタンス化を行う
const p1 = new Person1("o-kido", 49);
// 下記のように設定するとprototypeのnameに値を取りに行くとgetが呼ばれる
// Person1関数のthis._nameにo-kidoが格納されているので、getter経由でo-kidoと出力される
console.log(p1.name)
// setでの挙動は引数valに対して、代入した値が渡ってくる
// その値をthis._nameに入れるので出力結果はnanakamadoになる
p1.name = "nanakamado";
console.log(p1.name);
