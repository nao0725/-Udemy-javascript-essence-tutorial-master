async function fetchUsers(){
  const response = await fetch(`users.json`);
  const Json = await response.json();
  for(const user of Json){
    console.log(`おれは ${user.name}, 今年で${user.age}になる。`)
  }
}
// 実行すると同じ出力結果となる
fetchUsers();