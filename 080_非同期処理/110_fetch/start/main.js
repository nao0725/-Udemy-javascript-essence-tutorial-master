fetch(`users.json`).then(function(response){
  return response.json();
}).then(function(Json){
    console.log(Json);
    // for文を使用してループ
    for(const user of Json){
      // テンプレートリテラルを使って出力
      // nameとageがusers.jsonファイルのものを使用
      console.log(`おれは ${user.name}, 今年で${user.age}になる。`)
    }
})

// 以下のように出力されている
// おれは Bob, 今年で23になる。
// おれは Tim, 今年で30になる。
// おれは Sun, 今年で25になる。