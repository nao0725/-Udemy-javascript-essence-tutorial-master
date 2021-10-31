class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log('hello ' + this.name);
    }
}

class Japanese extends Person {
    constructor(name, age, gender) {
        // superの前に新たにthisを使ってプロパティを設定すると絵エラーになる
        // 必ず先に初期化
        super(name, age);
        this.gender = gender;
    }

    hello() {
        // superは継承元のコンストラクターだけでなくメソッドも呼び出せる
        super.hello();
        console.log('Konnichiwa ' + this.name);
    }

    bye() {
        console.log('Sayonara ' + this.name);
    }
}

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);
// 下記のhelloメソッドを使うとsuper.hello();はPersonのhelloメソッドを使っているので
// hello Taro
taro.hello();

// const american = {
//     hello() {
//         console.log('hello ' + this.name);
//     }
// }

// const bob = {
//     name: 'Bob',
//     hello() {
//         super.hello();
//     }
// }
