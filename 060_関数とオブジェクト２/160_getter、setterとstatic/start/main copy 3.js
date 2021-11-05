class Person2 {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}
	// :functionの部分をnameに書き換える(setter同様)
	get name() {
		console.log("hello");
		return this._name;
	}
	// 上記カンマも不要
	set name(val){
		this._name = val
	}
}

const a = new Person2("ゼニガメ", 3);
console.log(a.name);