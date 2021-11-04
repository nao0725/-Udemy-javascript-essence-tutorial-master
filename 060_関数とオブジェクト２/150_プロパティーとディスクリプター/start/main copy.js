"use strict"

const obj = {};
Object.defineProperty(obj, "prop", {
  value : 0,
  // trueに許可
  writable: true
})

obj.prop = 1;
// 出力結果が1になる
console.log(obj.prop);

const descriptor = Object.getOwnPropertyDescriptor(obj, "prop");
console.log(descriptor);