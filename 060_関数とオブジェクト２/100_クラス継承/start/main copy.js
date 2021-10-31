class Person{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log('hello ' + this.name);
  }
}

class Japanese{
  constructor(name, age, gender) {
    Person.call(this, name, age);
    this.gender = gender;
  }

  hello(){
    console.log('Konnichiwa ' + this.name);
  }

  bye() {
    console.log('Sayonara ' + this.name);
  }
}

// Japanese.prototype = Object.create(Person.prototype);
const taro = new Japanese('Taro', 23, 'Male');

