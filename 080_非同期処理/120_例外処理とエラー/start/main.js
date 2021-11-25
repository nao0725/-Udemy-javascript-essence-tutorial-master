async function fetchUsers() {
  const response = await fetch('users.json');
  if (response.ok){
    const json = await response.json();
    if(!json.length){
      // ここでNoDataErrorを出力できるようにする
      throw new NoDataError("no data found")
    }
    return json;
  } 
}

// Errorを継承
// 条件分岐でエラーを出力したい場合に行う
class NoDataError extends Error {
  constructor(message){
    super(message);
    this.name = `NoDataError`;
  }
}

async function init(){
  try {
    const users = await fetchUsers();
    for(const user of users) {
        console.log(`I'm ${user.name}, ${user.age} years old`)
    }
  }catch(e){
    console.error(e);
  }finally{
    console.log('bye');
  }
}

init();