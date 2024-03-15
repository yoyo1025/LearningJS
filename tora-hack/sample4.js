/*
map() 新しい配列を作る
・配列をイテレートする
・要素を1つずつ処理
・新しい配列を生成
*/

const array = [1, 2, 4, 8]
const resultArray = array.map(x => x * 2)
console.log(resultArray)

const object = {
    "hoge": { text: "fuga" },
    "foo": { text: "hoge" },
    "fiz": { text: "buzz" }
};

const objectToArray = Object.keys(object).map(key => {
    const value = object[key]
    value['id'] = key
    console.log(value)
    return value
});

console.log(objectToArray)