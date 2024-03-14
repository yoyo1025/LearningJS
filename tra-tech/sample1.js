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
