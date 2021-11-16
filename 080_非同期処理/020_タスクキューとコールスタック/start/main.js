const btn = document.querySelector('button');
// ボタンクリックするとコンソールにtask2 doneと出力
btn.addEventListener('click', function task2() {
    console.log('task2 done');
});
// 関数aが実行されるとtask1 doneと4秒後に出力される
function a() {
    setTimeout(function task1() {
        console.log('task1 done');
    }, 4000);
// 2秒間メインスレッドを占有する処理が以下で行われ,fn a doneと出力
    const startTime = new Date();
    while (new Date() - startTime < 5000);

    console.log('fn a done');
}

// 関数aを実行
a();
