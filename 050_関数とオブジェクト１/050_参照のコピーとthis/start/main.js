// window.name = "John";

// const person = {
//     name: 'Tom',
//     hello: function() {
//         console.log('Hello ' + this.name);
//     }
// }
// const ref = person.hello;
// ref();

window.name = "John";

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
        a();

        const person = {
            name: 'Tim',
            hello: function() {
                console.log('Hello ' + this.name);
                a();
            }
        }
        person.hello();
    }
}
person.hello();

function a(){
    console.log('Hello ' + this.name);
}