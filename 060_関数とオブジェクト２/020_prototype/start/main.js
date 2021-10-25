function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function(){
        console.log("Hello" + this.name);
    }
}

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);

// 実行するとHelloBobと出力
bob.hello();
tom.hello();
sun.hello();

// =============================================

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.hello = function(){
//         console.log("Hello" + this.name);
//     }
// }