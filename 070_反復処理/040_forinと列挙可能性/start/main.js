// オブジェクトを定義
const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

Object.prototype.hello = function(){}

for(let key in obj){
	// 第一引数にkey情報を入れる
	// このkeyが反応し、自分自身(obj)のプロパティかどうか判断しif文でtrueの場合出力する
	if (obj.hasOwnProperty(key)){
		console.log(key, obj[key]);
	}
}