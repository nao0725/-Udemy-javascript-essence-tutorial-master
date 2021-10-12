// function fn(a,b) {
//   console.log(a,b);
// }

// fn(0,1);

function fn() {
  const a = arguments[0];
  const b = arguments[1];
  console.log(arguments);
  console.log(a,b);

  return a;
}

let c = fn(1,undefined);
console.log(c);