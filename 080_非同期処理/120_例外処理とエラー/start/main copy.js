// 動かしたいコードをtryの中に記述していく
try{
  console.log("start");
  // エラーを出力する　→　catchに移行する
  throw new Error("error message");
  // 上記で処理がcatchに移行するので下記endは出力されない
  console.log("end")
} catch(e) {
  console.error(e);
} finally {
  // 出力される終了処理
  console.log('bye');
}

// async function fetchUsers() {
//   const response = await fetch('users.json');
//   const json = await response.json();
//   for(const user of json) {
//     console.log(`I'm ${user.name}, ${user.age} years old`)
//   }
// }

// fetchUsers();