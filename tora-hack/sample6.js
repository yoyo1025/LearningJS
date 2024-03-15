/*変更された箇所のインデックスを探す時によく使われる*/
const objectArray = [
    { id: "hoge", text: "fuga" },
    { id: "foo", text: "hoge" },
    { id: "fiz", text: "buzz" }
];

const index = objectArray.findIndex(object => {
    return object.id == 'hoge'
})

console.log(index, objectArray[index])