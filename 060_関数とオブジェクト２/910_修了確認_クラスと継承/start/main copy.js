/**
 * 問題：
 * ログインの制御を行うloginController
 * という名前の関数が存在します。
 * この関数はuserインスタンスを渡すと
 * 
 * ログイン処理（login）
 * ->ユーザー権限チェック（checkRoll）
 * ->適切なページへのリダイレクト（redirect）
 * 
 * を内部で行います。
 * 
 * 以下の呼び出し方をした場合に該当のメッセージが
 * コンソールに出るように実装してみてください。
 * 
 **************************************** 
 * １．一般ユーザーがログインした時。
 * loginController(new User('Bob'));
 * 
 * ログイン成功した場合：
 * User: Bob
 * you have normal roll
 * redirect : /
 * login success
 * 
 * ログイン失敗した場合：
 * User: Bob
 * you have normal roll
 * login failed <- checkRollで失敗した場合
 * 
 ****************************************
 * ２．管理者（AdminUser）でログインした場合
 * loginController(new AdminUser('Bob'));
 * 
 * ログイン成功した場合：
 * User: Bob
 * you have admin roll
 * redirect : /admin
 * login success
 * 
 * ログイン失敗した場合：
 * User: Bob
 * login failed <- loginで失敗した場合
 */

// loginController(new User('Bob'));
// class checkRoll(){
//   constructor(user,redirect){
//     user = this.user;
//     redirect = this.redirect;
//   }
// }

class User {
  // 問題で必要そうな値は名前
  constructor(name){
    this.name = name;
    // path（url）を格納しておく
    this.redirectTo = "/"
  }
  // ログインメソッド作成
  login(){
    console.log(`User: ${this.name}`);
    // 成功しましたということで、trueを返す
    return true;
  }
  // checkRollメソッドも作成
  checkRoll(){
    console.log("you have normal roll");
    return true;
  }
  // redirectメソッドも作成
  redirect(){
    console.log(`redirect : ${this.redirectTo}`)
    return true;
  }
}

// AdminUserも作成(殆どUserの機能を持っているのでextendsで継承)
class AdminUser extends User{
  constructor(name){
    super(name);
    // リダイレクト後のpathも変わってくるので
    this.redirectTo = "/admin"
  }

  // 変わってくる部分はrollの部分なので変更しておく
  checkRoll(){
    console.log("you have admin roll");
    return true;
  }
}

function loginController(user) {
  if (user.login()
    && user.checkRoll()
    && user.redirect()) {
    console.log('login success');
  } else {
    console.log('login failed');
  }
}


// loginController(new User('Bob'));
loginController(new AdminUser('Bob'));
