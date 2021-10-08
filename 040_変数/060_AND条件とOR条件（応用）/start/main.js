function hello(name){
  name = name || "Tom";
  console.log("Hello" + name);
}

// hello("Bob")

// if(name){
//   hello(name);
// }

let name;
name && hello(name);

