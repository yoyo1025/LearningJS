/*
test() マッチする文字列か判定
・正規表現を使う
・マッチする -> trueを返す
・マッチしない -> false を返す
*/

const torahack = 'torahack'
const charahack = 'charahack'
const regex = RegExp('tora*')

console.log("Is tora ~ ?", regex.test(torahack)); // true
console.log("Is tora ~ ?", regex.test(charahack)); // false
console.log("is chara ~ ?", /chara*/.test(charahack)); // true

const isTora = regex.test(torahack)

if (isTora) {
    console.log('私はトラハックです');
} else {
    console.log('私はトラハックではありません');
}
