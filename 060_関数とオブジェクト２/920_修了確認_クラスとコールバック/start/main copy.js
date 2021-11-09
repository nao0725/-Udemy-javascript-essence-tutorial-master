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
// 【自分の回答1】
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


// 【回答1】bindを使う
class Person {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  hello() {
      console.log('hello ' + this.name);
  }
}

const bob = new Person('Bob', 23);
setTimeout(bob.hello.bind(bob), 1000);



// 【自分の回答2】
// class Person {
//   constructor(name, age) {
//       this.name = name;
//       this.age = age;
//       this.hello = function(){
//         console.log('hello ' + this.name);
//     }
//   }
// }

// const bob = new Person('Bob', 23);
// setTimeout(bob.hello(), 1000);

// 【回答2】無名関数を使う
setTimeout(function(){
  bob.hello();
},1000)