
const map = new Map();
const key1 = {};
map.set(key1,"value1")
// keyとvalueの値をそれぞれ渡す
for(const [k,v] of map){
  // {}[[Prototype]]: Object 'value1'と出力される
  console.log(k,v);
} 

for(const a in map){
  // for...inでは出力されない
  console.log(a);
}