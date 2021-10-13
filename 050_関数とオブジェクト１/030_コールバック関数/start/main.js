// 関数は実行可能なオブジェクトである

// コールバック関数
// 他の関数に引数として渡される関数

// function hello(){
//   console.log("hello");
// }

// function fn(cb){
//   cb();
// }

// fn(hello);


// function hello(){
//     console.log("hello");
//   }

//   function bye(){
//     console.log("bye");
//   }
  
//   function fn(cb){
//     cb();
//   }
  
//   fn(hello);
//   fn(bye);


function hello(){
  console.log("hello");
}

function bye(){
  console.log("bye");
}

function fn(cb){
  cb("Tom");
}

fn(hello);
fn(bye);
fn(function(name){
  console.log("hello" + name);
})

setTimeout(hello, 2000);