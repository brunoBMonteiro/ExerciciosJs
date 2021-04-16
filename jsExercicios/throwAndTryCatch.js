// throw

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatorio'
    }
    console.log('Depois do erro')
}

// try...catch
try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('Após a função de erro')