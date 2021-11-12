
// objに変数を変更
const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

Object.prototype[Symbol.iterator] = function(){
	// 関数内で呼ばれたthisはwindowオブジェクトを呼び出す
	const keys = Object.keys(this);
	let i = 0;
	// ここでreturn内のthisもobjの値を取れるように設定
	let _this = this;
	return {
		next(){
			let key = keys[i];
			i++;
			// ここで取れるthisはnextという値が入ったthisが取れてくるので下記のように書かない
			// console.log(this);
			// 下記の_thisではスコープチェーンを辿ってnextのwindowオブジェクトを参照する
			// console,log(_this);
			return{
				// ループの終了条件追加
				// 配列の要素数のがiより大きくなった＝true＝終了
				done: i > keys.length,
				// ここでvalueを設定
				// entriesと同じように配列で渡したいので[]でkeyと_thisのkeyをもとに値を取得する
				value: [key, _this[key]]
			}
		}
	}
}
// const items = Object.entries(obj);
// 分割代入でk,vとして値を渡す
for (let [k,v] of obj) {
	console.log(k,v);
	// 出力結果はprop1,value1.....となる
}