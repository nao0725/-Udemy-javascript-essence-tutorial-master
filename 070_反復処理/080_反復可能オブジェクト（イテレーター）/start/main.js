
const items = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

Object.prototype[Symbol.iterator] = function(){
	// このようにするとプロパティが配列になったものがkeysに格納される
	const keys = Object.keys(this);
	// keysの値を一つずつ取っていきたい
	// 変数iを定義し、iが+1されるごとにkeysからキー情報を取得してそれを元に値を取得していく
	const i = 0;
	return {
		// next()が呼び出されてた時に値を一つずつ取得していく
		next(){
			let i = keys[i];
			// 省略して上記にi++でも可
			i++;
			return{
				done: true,
				value: 0
			}
		}
	}
}
// const items = Object.entries(obj);
for (let item of items) {
	console.log(items);
}