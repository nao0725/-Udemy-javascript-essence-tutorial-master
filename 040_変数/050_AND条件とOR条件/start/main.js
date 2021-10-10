// AND条件　かつ　a && b 
// aとbがtureでないといけない

// const a = 1;
// const b = 1;
// // 出力結果で1が返ってくる　＝　ture
// console.log(a && b)

// OR条件　または　
// aもしくはbがture
// const a = 0;
// const b = 1;
// // まずaがturethyなのかどうか確認する　
// // aがtureの場合 ＝＞　bの値を返す
// // aがfalseの場合 　＝＞　aの値を返す
// // ここではaは０なのでaの値を返す
// console.log(a && b)


// // もしcの値を代入したら
// const a = 1;
// const b = 2;
// const c = 3;
// // この場合a,b,cそれそれfalseに値しないのでcの値3が出力される
// console.log(a && b && c)

// AND条件はfalsyなものが途中であった場合は、その値を返す
// もしなかった場合は一番最後の値を出力する


// // まずaがfalsyかturethyなのかどうか確認する　
// // aがtureの場合 ＝＞　aの値を返す
// // // aがfalseの場合 　＝＞　bの値を返す
// const a = 1;
// const b = 0;
// // この場合aがturethyなので、1と出力される
// console.log(a || b)

// もしa = 0, b = 1, c = 2なら
// const a = 0;
// const b = 1;
// const c = 2;
// // この場合aがfalsyなので、bの値1と出力される
// console.log(a || b)
// // 下記の場合でもbがturethyなので1が出力される
// // もし、b = 0(false)ならcの値２が出力される
// console.log(a || b || c)

// // OR条件はtureが見つかった時点で値を出力される
// // 見つからなかった場合は一番最後の値が出力される



// const a = 0;
// const b = 1;
// const c = 3;
// // 下記の条件では3が出力される　
// // aはfalseでOR条件なのでbの値を調べに行く
// // bはturethyなのでAND条件によってcの値を調べに行く
// // cもturethyなのでAND条件によってcの値を調べに行く
// console.log(a || b && c)


// もしd = 0が条件に加わったら
const a = 0;
const b = 1;
const c = 3;
const d = 0;
// グループ毎に演算をおこない、最後にAND条件で結果を出力される
console.log((a || b) && (c || d))
// aとbはOR条件によって、tureが見つかった時点で結果を出力するので、１
// cとdはOR条件によって、3と出力される
// AND条件はfalsyな値が見つかった時点で結果を出力するが今回はどちらもtureなので
// 一番最後の値である右のグループの3が出力される

