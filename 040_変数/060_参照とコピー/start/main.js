let a = "Hello";
let b = a;
b = "bye";
console.log(a,b);



// let c = {
//   prop: "hello"
// }

// let d = c;
// d.prop = "bye";
// console.log(c,d);

let c = {
    prop: "hello"
  }
  
  let d = c;
  d = {prop: "bye"};
  console.log(c,d);