const map = new Map();
const key2 = function(){}
map.set(key2, "value2");
console.log(map.get(key2));
// value2と出力されるので,関数もキーとして取れることがわかる