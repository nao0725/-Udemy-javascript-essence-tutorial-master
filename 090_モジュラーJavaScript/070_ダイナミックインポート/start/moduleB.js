async function fn() {
  // importの実行部分をawaitで受けて変数に格納
  const modules = await import('./moduleA.js')
  // 使いたい関数を下記のように実行
  modules.publicFn();
}
fn();