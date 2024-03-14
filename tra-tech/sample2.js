let mutableText = 'let変更前';
mutableText = 'let変更後';  // 変更可能
console.log(mutableText)

const immutableText = 'const変更前';
immutableText = 'const変更後';  // 変更不可
console.log(immutableText)

const mutableArray = [1, 2, 3];
mutableArray.push(4);  // 配列やオブジェクトは定数宣言でも mutable
console.log(mutableArray);

const mutableObject = { id: 'hoge', value: 'fuga' }
mutableObject['name'] = 'bar'
console.log(mutableObject)