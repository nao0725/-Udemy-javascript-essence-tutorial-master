class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log('hello ' + this.name);
  }
}

const Lupin = new Person("ルパン", 26);
// 出力するとPerson {name: 'ルパン', age: 26}で返ってくる
console.log(Lupin);
