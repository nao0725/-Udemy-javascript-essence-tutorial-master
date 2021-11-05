function Person1(name, age) {
	this.name = name;
	this.age = age;
}

Person1.hello = function() {
	console.log("hello");
}
Person1.hello();

Object.defineProperty(Person1.prototype, "name", {
	get: function () {
		return this._name;
	},
	set: function(val){
		this._name = val
	}
})

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
	static hello(){
		console.log("hello！");
	}
}

const p2 = Person2("utugi", 37);
console.log(p2);
