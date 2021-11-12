const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}
// イテレーターを準備
Object.prototype[Symbol.iterator] = function(){
	return {
		// nextメソッドが必要
		next(){
			return{
				// とりあえず無限ループしないようにtrue
				done: true,
				// こちらも仮で0にする
				value: 0
			}
		}
	}
}
// const items = Object.entries(obj);
// for (let item of items) {
// 	console.log(item);
// }