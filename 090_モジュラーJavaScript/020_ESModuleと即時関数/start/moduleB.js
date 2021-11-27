// // moduleBも全体をコピーして持ってくる
// const moduleB = (function(moduleA) {
  // 以下の書き方に変更
  import { publicFn as Fn, publicVal as Val} from "./moduleA.js";
  Fn();
  Fn();
  Fn();
  // moduleAに合わせて変更
  console.log(Val.prop++)
  console.log(Val.prop++)
  console.log(Val.prop++)
