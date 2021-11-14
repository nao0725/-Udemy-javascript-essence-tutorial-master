const items = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

// ジェネレーター関数なのでfunctionの後ろに*をつける
Object.prototype[Symbol.iterator] = function* (){
	// for..inを使用
	// thisはオブジェクトの参照を保持している
	for(let key in this){
		yield [key, this[key]];
	}
}
// 以上で書き換え終了


for(let [k,v] of items){
	console.log(k, v);
}