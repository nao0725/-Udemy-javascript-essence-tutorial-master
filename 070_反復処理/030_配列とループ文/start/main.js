// 配列を定義
const arry = [1, 2, 3, 4, 5];

// while文を使用
// 自分の回答
// let i = 0;

while(i < arry.length){
  console.log(arry[i]);
  i++;
}

// vもiも初期値0
let v, i = 0;
// 後方インクリメントなのでiに値が渡ってきたら+1する
// 0番目の値は1 v = 1で1が出力される
// 値がtrueであればループ継続
while(v = arry[i++]){
  // arry[5]は6だが配列表記にないので、undefined = falseとなるのでループから抜け出せる
  console.log(v);
}


