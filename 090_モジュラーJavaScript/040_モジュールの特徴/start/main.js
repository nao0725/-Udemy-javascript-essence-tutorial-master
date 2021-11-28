// documentのquerySelectorというメソッドを使ってh1タグの要素を取得
const h1 = document.querySelector("h1");
// documentというオブジェクトの中にHTMLのタグが格納されている
// よってこれらのオブジェクトにアクセスすることで値が取得できる
const text = h1.textContent;
// モジュールレクチャーと表示される
console.log(text);