function updateCalculateButton() {
    const incomeInput = document.getElementById('income-input');
    let incomeNumber = parseInt(incomeInput.value);
    const foodInput = document.getElementById('food-input');
    let foodNumber = parseInt(foodInput.value);
    const rentInput = document.getElementById('rent-input');
    let rentNumber = parseInt(rentInput.value);
    const clothesInput = document.getElementById('clothes-input');
    let clothesNumber = parseInt(clothesInput.value);
    const totalExpenses = foodNumber + rentNumber + clothesNumber;
    const expensesPrice = document.getElementById('expenses-price').innerText = totalExpenses;
    let Balance = document.getElementById('balance').innerText = incomeNumber - totalExpenses;


    if (incomeNumber < 0) {
        document.getElementById('income-input-error').innerText = 'Please positive value';
        const expensesPrice = document.getElementById('expenses-price').innerText = 00;
        let Balance = document.getElementById('balance').innerText = 00;
        const saveAmount = document.getElementById('save-amount').innerText = 00;
        let remainingBalance = document.getElementById('remaining-balance').innerText = 00;
    } else if (foodNumber < 0) {
        document.getElementById('food-input-error').innerText = 'Please positive value';
        const expensesPrice = document.getElementById('expenses-price').innerText = 00;
        let Balance = document.getElementById('balance').innerText = 00;
        const saveAmount = document.getElementById('save-amount').innerText = 00;
        let remainingBalance = document.getElementById('remaining-balance').innerText = 00;
    } else if (rentNumber < 0) {
        document.getElementById('rent-input-error').innerText = 'Please positive value';
        const expensesPrice = document.getElementById('expenses-price').innerText = 00;
        let Balance = document.getElementById('balance').innerText = 00;
        const saveAmount = document.getElementById('save-amount').innerText = 00;
        let remainingBalance = document.getElementById('remaining-balance').innerText = 00;
    } else if (clothesNumber < 0) {
        document.getElementById('clothes-input-error').innerText = 'Please positive value';
        const expensesPrice = document.getElementById('expenses-price').innerText = 00;
        let Balance = document.getElementById('balance').innerText = 00;
        const saveAmount = document.getElementById('save-amount').innerText = 00;
        let remainingBalance = document.getElementById('remaining-balance').innerText = 00;
    }
}

function updateSaveAndTotalBalance() {
    const saveInput = document.getElementById('save-input');
    let saveNumber = parseInt(saveInput.value);

    if (saveInput.value == 20) {
        const incomeInput = document.getElementById('income-input');
        let incomeNumber = parseInt(incomeInput.value);

        const foodInput = document.getElementById('food-input');
        let foodNumber = parseInt(foodInput.value);
        const rentInput = document.getElementById('rent-input');
        let rentNumber = parseInt(rentInput.value);
        const clothesInput = document.getElementById('clothes-input');
        let clothesNumber = parseInt(clothesInput.value);
        const totalExpenses = foodNumber + rentNumber + clothesNumber;
        const expensesPrice = document.getElementById('expenses-price').innerText = totalExpenses;
        let Balance = document.getElementById('balance').innerText = incomeNumber - totalExpenses;


        const discount = (incomeNumber * 20) / 100;
        const saveAmount = document.getElementById('save-amount').innerText = discount;
        const remainingBalance = document.getElementById('remaining-balance');
        let totalRemainingBalance = parseFloat(remainingBalance.innerText);
        totalRemainingBalance = Balance - discount;
        remainingBalance.innerText = totalRemainingBalance;
    }
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    updateCalculateButton()
})

document.getElementById('save-button').addEventListener('click', function () {
    updateSaveAndTotalBalance()
    // if (saveNumber > 1) {

    // }
})