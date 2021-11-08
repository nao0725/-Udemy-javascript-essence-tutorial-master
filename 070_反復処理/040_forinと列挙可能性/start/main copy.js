// オブジェクトを定義
const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}
// for..inを記述
for(let key in obj){
	// このkeyの値にはprop1,prop2,prop3の値(プロパティ)が入っている
	console.log(key);
	// keyを元にobjの値を取得すると
	console.log(key, obj[key]);
	// prop1 value1...と出力される
}