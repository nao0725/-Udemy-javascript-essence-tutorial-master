/**
 * 問題：
 * Person.helloメソッドをsetTimeoutで１秒後に
 * 実行しようとしましたが、"hello Bob"と表示されませんでした。
 * 
 * setTimeoutに渡す方法がおかしそうなのですが、
 * どのようにすればよいでしょうか？
 * 
 * ※２通りの方法で実装してみてください。
 */
// class Person {
//   constructor(name, age) {
//       this.name = name;
//       this.age = age;
//   }
// }

// Object.prototype.hello = function() {
//   console.log('hello ' + this.name);
// }

// const bob = new Person('Bob', 23);
// setTimeout(bob.hello(), 1000);


class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
      this.hello = function(){
        console.log('hello ' + this.name);
    }
  }
}

const bob = new Person('Bob', 23);
setTimeout(bob.hello(), 1000);