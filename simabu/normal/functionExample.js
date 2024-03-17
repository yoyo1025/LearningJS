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

// 4.
// 関数式
const isTweetable = function (text) {
    return text.length <= 140;
};

console.log(isTweetable("foo"));

// 5.
/**
 * function 高階関数(コールバック関数){
 *  // 処理
 *  コールバック関数();
 * }
 */

const unfollow = function () {
    console.log("フォローを外しました");
}

const cancelTweet = function () {
    console.log("ツイートをキャンセルしました");
}

function confirmed(fn) {
    if (window.confirm("実行しますか？")) {
        fn();
    }
}

// confirmed(cancelTweet);でも良いが下は匿名関数をコールバック関数に用いた例である
confirmed(function () {
    console.log("ツイートをキャンセルしました");
})


function confirmed2(fn) {
    const input = window.prompt("実行しますか？")
    fn(input); //fn(input) の input を confirmed2 の匿名関数の引数に渡すことで条件分岐できる
}

confirmed2(function (input) {
    if (input == "実行") {
        console.log("リポジトリを削除");
    }
});

window.prompt("実行しますか？")

const btn = document.getElementById("button");
btn.addEventListener("click", function () {
    console.log("フォロー解除");
});

const foods = ["にんじん", "じゃがいも", "たまねぎ"];
foods.forEach(function (food) {
    console.log(food);
});