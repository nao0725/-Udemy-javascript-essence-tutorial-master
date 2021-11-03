const s = Symbol("hello");
const s2 = Symbol("hello");
console.log(typeof s);

const str = new String("Jun");
console.log(str);
String.prototype[s] = function(){
  // returnでhello とthis(外で定義した値)を返す
  return "hello " + this;
}

const jun = "Jun";
// Symbolを使っているので、ドット記法ではなくブラケット記法で書く
console.log(jun[s]());
// hello junと出力される
