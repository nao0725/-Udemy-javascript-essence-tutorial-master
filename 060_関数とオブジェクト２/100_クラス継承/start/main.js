// Personをクラス表記に変更
class Person{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // helloメソッド追加
  hello() {
    console.log('hello ' + this.name);
  }
}

// 同様にjapaneseクラスを作成
// Javaでも使用したモノ！
class Japanese extends Person{
  constructor(name, age, gender) {
    // クラスの継承では下記を使用していたが、クラスではextendsを使用
    // Person.call(this, name, age);
    // superを使用することで継承元のプロパティを使用できる
    super(name, age);
    this.gender = gender;
  }
  // helloメソッドを追加
  hello(){
    console.log('Konnichiwa ' + this.name);
  }
  // byeメソッドを追加
  bye() {
    console.log('Sayonara ' + this.name);
  }
}
// 下記のコードもextendsによって実現されるので不要
// Japanese.prototype = Object.create(Person.prototype);

// インスタンス化
const taro = new Japanese('Taro', 23, 'Male');
// 出力するとオブジェクトが生成される
console.log(taro);
// taroメソッドが使用される
taro.hello();
