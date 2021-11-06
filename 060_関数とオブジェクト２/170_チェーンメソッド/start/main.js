class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	hello(person) {
		console.log(`${this.name} says hello ${person.name}`);
		// returnでthisを設定
		// このthisにはコンストラクター関数から作成したオブジェクトとなる
		return this;
	}

	introduce() {
		console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
		return this;
	}

	shakeHands(person) {
		console.log(`${this.name} shake hands with ${person.name}.`);
		return this;
	}

	bye(person) {
		console.log(`Goodbye, ${person.name}.`);
		return this;
	}
}

const bob = new Person('Bob', 23);
const tim = new Person('Tim', 33);

// return thisを設定すると,
// introduceが格納されているオブジェクトのインスタンスをメソッドで返してやることによって続けて書くことができる
bob.hello(tim)
.introduce()
.shakeHands(tim)
.bye(tim);;
