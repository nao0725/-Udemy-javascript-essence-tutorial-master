
const items = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

Object.prototype[Symbol.iterator] = function(){
	const keys = Object.keys(this);
	const i = 0;
	return {
		next(){
			let i = keys[i];
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