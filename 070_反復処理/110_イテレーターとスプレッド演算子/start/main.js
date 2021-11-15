const obj1 = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3"
}

Object.prototype[Symbol.iterator] = function* (){
  for(let key in this){
    yield[key, this[key]];
  }
}

  // {}で囲う
const array4 = {...obj1};
// {prop1: 'value1', prop2: 'value2', prop3: 'value3'}と出力される
// これはジェネレーターを通さずに、obj1がそのまま出力されている
console.log(array4)
