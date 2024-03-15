/*filter メソッドは条件に合ったオブジェクトの配列を作る*/

const objectArray = [
    { id: "hoge", text: "fuga" },
    { id: "foo", text: "hoge" },
    { id: "fiz", text: "buzz" }
];

const result = objectArray.filter(object => {
    return object.id == 'hoge'
})

console.log(result)
console.log(result[0])
console.log(result[0].text)

