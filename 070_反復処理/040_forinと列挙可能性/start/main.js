// 変数sにSymbolを入れる
const s = Symbol();

// オブジェクトの中にsも混ぜてあげる
const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3',
	// 変数をプロパティの値として使用する際は[変数]と表記する
	[s]: "value4"
}

for(let key in obj){
	// Symbolの値が出力されていない
		console.log(key, obj[key]);
}

// ディスクリプターで確認すると
const b = Object.getOwnPropertyDescriptor(obj, s);
// {value: 'value4', writable: true, enumerable: true, configurable: true}と出力され、enumerableがtrueとなっていることがわかる
console.log(b);