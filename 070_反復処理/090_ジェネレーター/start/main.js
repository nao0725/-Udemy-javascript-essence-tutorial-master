

// ジェネレーターに書き換え
// functionの後ろに*をつけることでこの関数がジェネレーター関数であることを示している
function* gen(){
  if(ループ継続){
    // 下記のyieldでイテレーターの部分を表す
    // ここでdoneがfalse,value(値)であることを指す
    yield 値;
  } else {
    // ここのreturnでdoneがtrue,valueを表す　→　ループを抜け出す
    return 値;
  }
}