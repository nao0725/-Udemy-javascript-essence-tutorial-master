"use strict"

const obj = {};
Object.defineProperty(obj, "prop", {
  value : 0,
  writable: true,
  configurable: true
})

delete obj.prop;

// obj.prop = 1;
// 上記をコメントアウトするとdeleteが働いて,undefinedと表示される
console.log(obj.prop);

