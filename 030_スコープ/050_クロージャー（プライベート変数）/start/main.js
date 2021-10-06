// 関数名をincrementFactoryに変更
// Factoryというのは何かを生成する場合につける変数名
// ここではincrementという値を作成するFactoryとして命名
function incrementFactory(){
  // グローバルコンテキスト前で宣言していた変数numをincrementFactory内に格納
  // このようにすることでincrementの外部に変数を探しに行く仕組みができました（これがクロージャー？）
  let num = 0;
  // 更にその中にincrementを定義
  function increment(){
    //  変数宣言と値も移動
    num += 1;
    console.log(num);
  }
  // returnを設定することで呼び出しもとをincrementFactoryに返却します
  // JSでは関数自体も返却可能
  return increment;
}

// 変数incrementはincrementFactoryを実行する
// かっこ（）が実行を意味する
// numの初期化はincrementFactoryを実行したときのみ初期化される
const increment = incrementFactory();
// ここで関数を実行するとカウントアップしていく
increment();
increment();
increment();
increment();
increment();

// 上記のように定義することでnumという宣言はincrementFactoryの中でしか呼び出せない
// console.log(num)とここで呼び出してもエラーになる