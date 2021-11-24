// 第一引数にリクエスト先のURLを入力（今回はuser.jsonファイル）
// fetch("users.json")
// どのような戻り値が帰ってくるのかコンソールで確認
// console.log(fetch(`users.json`))
// このようにするとPromiseが返ってきていることがわかるのでthenメソッドが使える
fetch(`users.json`).then(function(response){
  // サーバーから返ってきたデータを格納している
  console.log(response);
})