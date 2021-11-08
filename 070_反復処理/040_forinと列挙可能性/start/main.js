// オブジェクトを定義
const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

// オブジェクトのプロトタイプのhelloメソッドを定義
// このように書くとhelloメソッドまで出力される
Object.prototype.hello = function(){}

// 上記のhelloメソッドまで出力させないようにenumerableを追加する
// definePropertyを使う
// 第一引数はメソッドが格納されているprototype、第二引数はメソッド名、第三引数は設定値
Object.defineProperty(Object.prototype, "hello", {
	// 列挙しない設定になる(出力結果から消える)
	enumerable: false
})

// 実際にディスクリプターを確認する
const a = Object.getOwnPropertyDescriptor(Object.prototype, "hello");
// 出力結果でenumerable: falseとなっていることがわかる
console.log(a);

// 試しにprop1を列挙対象から外してみるとコンソールからprop1が消える
Object.defineProperty(obj, "prop1", {
	enumerable: false
})



for(let key in obj){
	console.log(key, obj[key]);
}