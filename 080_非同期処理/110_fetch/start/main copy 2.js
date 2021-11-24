fetch(`users.json`).then(function(response){
  // コンソールからjsonというメソッドが使えることがわかる
  return response.json();
}).then(function(Json){
  // この引数Jsonにデータが入っているか確認する
    console.log(Json);
})