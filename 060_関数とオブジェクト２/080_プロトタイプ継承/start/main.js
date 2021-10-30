function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 引数にgender追加
function Japanese(name,age, gender){
    Person.call(this, name, age);
    // ここで更に性別を表すプロパティを追加
    this.gender = gender;
}
Japanese.prototype = Object.create(Person.prototype)


Japanese.prototype.hello = function() {
  console.log('こんにちは ' + this.name);
  // 出力結果を追加
  console.log('性別は ' + this.gender + "です!");
}

const taro = new Japanese("太郎", 23, "男");
// helloメソッドを使用したときに性別は〜〜〜の内容も出力される
taro.hello();