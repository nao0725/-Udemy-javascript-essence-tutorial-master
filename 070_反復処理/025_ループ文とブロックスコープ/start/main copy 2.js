// ループ分を定義
for(let i = 0; i < 5; i++) {
  var j = i * 2
  setTimeout(function(){
    console.log(j)
  }, 2000)
}
// 8が5回出力される
// varはブロックスコープを透過するのでループの外で定義しているのと変わりないから
// 下記でも同じ結果

var b;
for(let a = 0; a < 5; a++) {
　 b = a * 2
  setTimeout(function(){
    console.log(j)
  }, 2000)
}
