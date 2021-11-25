async function fetchUsers() {
  const response = await fetch('users.json');
  // 条件分岐でデータがうまく渡っている場合そうでない場合で分ける
  if (response.ok){
    const json = await response.json();
    // ここでjsonファイルが0だった場合にthrowでエラー処理をcatchに移行したい
    // jsonファイルのlength（配列の長さ）が0だった場合falseなので!演算子でtrueにする
    if(!json.length){
      throw new Error("no data found")
    }
    return json;
  } 
}

async function init(){
  // 上記の内容をtryで捌く
  try {
    const users = await fetchUsers();
    for(const user of users) {
        console.log(`I'm ${user.name}, ${user.age} years old`)
    }
  }catch(e){
    // ここでthrowを受けることでno data foundとエラー表示される
    console.error(e);
  }finally{
    // 終了処理はどちらにせよ出力される
    console.log('bye');
  }
}

init();