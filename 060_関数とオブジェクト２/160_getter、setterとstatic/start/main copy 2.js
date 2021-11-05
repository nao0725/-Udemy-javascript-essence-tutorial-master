function Person1(name, age) {
	this.name = name;
	this.age = age;
}

Object.defineProperty(Person1.prototype, "name", {
	get: function () {
		console.log("hello");
		return this._name;
	},
	set: function(val){
		this._name = val
	}
})
const p1 = new Person1("o-kido", 49);
console.log(p1.name)

p1.name = "nanakamado";
console.log(p1.name);
