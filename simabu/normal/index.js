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
