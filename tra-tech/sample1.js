/* 
let でスコープを絞ることで保守しやすくなる
var 関数内はどこからでも参照可能
let ブロック内{}のみ参照可能
*/

const testScope = (scope) => {
    if (scope == 'function') {
        var functionScope = '関数スコープ内ならどこでも参照できます'
    } else if (scope == 'block') {
        let blockScope = 'ブロックスコープ内でしか参照できません'
        console.log(blockScope)
    }
    console.log(functionScope)
}

testScope('block')
