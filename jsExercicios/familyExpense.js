let family = {
    incomes: [1000, 3200, 25, 50, 39],
    expenses: [3000.00 ,150.50, 128.45, 1300.00, 400]
}

function sum(array) {
    let total = 0;
    
    for(let value of array){
        total += value
    }

    return total;
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0 

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}:R$ ${total.toFixed(2)}`)
}

calculateBalance()