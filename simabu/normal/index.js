import youtuber from "./foo";

youtuber.plan()

youtuber.list.bussiness.youtuber[0].name

window.console.log(); // windowが無くてもいい
window.alert();

window.document.getElementById();


/**
 * Q. 変数とは？
 * A. データを保存しておくための箱。
 */
const fooWidth = document.getElementById("foo").offsetWidth;

const fooHeight = document.getElementById("foo").offsetHeight;

// いったん変数に格納してから縦・横ごとにメソッドを付けてもいい
const foo = document.getElementById("foo");
const fooWidth2 = foo.offsetWidth;
const fooHeight2 = foo.offsetHeight;
const fooArea = fooWidth2 * fooHeight2;


/**
 * Q. どうやって変数を宣言するのか
 * A. const 変数名 = 初期値;
 *    let 変数名 = 初期値;
 *    var 変数名 = 初期値; 
 */

const foo3 = 100;
let bar = 200;
var baz = 300;

/**
 * const の特徴
 * 再代入できない、再定義できない
 */

const constNumber = 100;
// その後、constNuber = 200; のように再代入はできない
// const cnostNumber = 150; のように再定義できない

const obj = {
    foo: 123
};

console.log(obj.foo); // 123

obj.foo = 456;

console.log(obj.foo); // 456　→　123 から 456 に書き換わったので const は厳密には定数ではない


/**
 * let の特徴
 * 再代入できる、再定義できない。
 */

let letNumber = 100;
letNumber = 200;

console.log(letNumber); // 200

// let letNumber = 300; // → error!

