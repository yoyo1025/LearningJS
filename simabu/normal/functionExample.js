/**
 * 1. 関数とは何か？
 * 　 タスクや値計算を実行する文の集まり(MDN)
 * 
 * 2. 今までの講座とのつながりについて
 * 　 オブジェクトのメソッドが関数です
 * 　 メソッドの短縮記法についても説明
 * 
 * 3. 関数の基礎について理解する
 * 　 return の有無で何が違うのか
 * 
 * 4. 匿名(無名)関数について理解する
 * 　 関数は値として利用できる(関数式)
 * 
 * 5. コールバック関数について理解する
 * 　 Windowオブジェクトのメソッド等でもよく使われます
 * 
 */

// 2.オブジェクトのメソッドが関数 
window.alert()

window.console.log()

window.document.getElementById()

const foo = {
    // alert: function () {},
    alert() { }, // 短縮記法
};

// 3.
/**
 * function 関数名(仮引数1, 仮引数2) {
 *      //　いろいろな処理. . .
 *      return 関数の戻り値;
 * }
 */

function cut(food) {
    // 切る処理...
    const cutFood = food.slice();
    return cutFood;
}

const cutCarrot = cut(carrot); // 人参
const cutPotato = cut(potato); // じゃがいも

function isTweetable(text) {
    return text.length <= 140;
}

console.log(isTweetable("foo"));

function alertTweetable(text) {
    if (isTweetable(text)) {
        alert("you can tweet !");
    }
}

alertTweetable("foo");
