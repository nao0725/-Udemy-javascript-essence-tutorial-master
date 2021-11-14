function* genIterator(max = 10){
  let i = 0;
  // whileを使って条件分岐
  while(i < max){
    yield i++;
    }
    // returnは省略可能(i < maxになった時点でループ終了)
    return ;
  }

const it = genIterator(10);

let a = it.next();
while(!a.done){
  // 0から9が出力される
  console.log(a.value);
  a = it.next();
}

