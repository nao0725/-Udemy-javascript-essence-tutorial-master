// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     hello() {
//         console.log('hello ' + this.name);
//     }
// }

// class Japanese extends Person {
//     constructor(name, age, gender) {
//         super(name, age);
//         this.gender = gender;
//     }

//     hello() {
//         super.hello();
//         console.log('Konnichiwa ' + this.name);
//     }

//     bye() {
//         console.log('Sayonara ' + this.name);
//     }
// }

// const taro = new Japanese('Taro', 23, 'Male');
// console.log(taro);
// taro.hello();

const american = {
    hello() {
        console.log('hello ' + this.name);
    }
}

const bob = {
    name: 'Bob',
    // hello() {
    //     console.log('hello ' + this.name)
    // }
}
// ,下記のようにするとコンソールでbobの中にhelloが継承されていることが確認できる
// よってbobのhellメソッドを消してもhello　Bobと出力される(プロトタイプをさかのぼってamericanに行き着いた)
Object.setPrototypeOf(bob, american);
bob.hello();




