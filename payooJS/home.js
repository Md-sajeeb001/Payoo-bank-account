// document.getElementById('addMoney-btn').addEventListener('click', function(event){
//     event.preventDefault();
//     const amountNumber = document.getElementById('input-amount-field').value;
//     const amountPin = document.getElementById('input-pin-field').value;
    
    
//     if(amountPin === '1234'){
//         const currentBalance = document.getElementById('Current-Balance').innerText;
//         const numberBalance = parseFloat(currentBalance)
//         const numberAmount = parseFloat(amountNumber);
//         const updateBalance = numberAmount + numberBalance;
//         console.log(updateBalance);
//         document.getElementById('Current-Balance').innerText = updateBalance ;
//     }
//     else {
//         alert("Invalid Input")
//     }
// });

// ----------------- Practice Part ------------------- //

document.getElementById('addMoney-btn').addEventListener('click', function(event){

    event.preventDefault();

    const pinNumber = document.getElementById('input-pin-field').value;
    const amountNumber = document.getElementById('input-amount-field').value;

    if(pinNumber === '890'){
        const amountBalance = document.getElementById("Current-Balance").innerText;
        const numberBalance = parseFloat(amountNumber);
        const balanceNumber = parseFloat(amountBalance)
        const add = numberBalance + balanceNumber;
        document.getElementById('Current-Balance').innerText = add;
    }
    else{
        alert('Money add Failed! please try again')
    }

})

// --------------------- cash out feild

document.getElementById('cash-out-btn').addEventListener('click', function(event){

    event.preventDefault();

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutPin = document.getElementById('input-cashOut-pin').value;
    const numberCashOut = parseFloat(cashOut);

    if(cashOutPin === '890'){
        const Balance = document.getElementById('Current-Balance').innerText;
        const numberBalance = parseFloat(Balance);
        const cashOutAmount = numberCashOut - numberBalance;
        document.getElementById('Current-Balance').innerText = cashOutAmount
    }
    else{
        alert('Your Money can\'t cash out')
    }
})

// ----------------------jump in cash out page

document.getElementById('cash-out').addEventListener('click', function(){
    document.getElementById('cashOut-form').classList.remove('hidden')
    document.getElementById('addMoney-form').classList.add('hidden')
})

document.getElementById('add-money').addEventListener('click', function(){
    document.getElementById('cashOut-form').classList.add('hidden');
    document.getElementById('addMoney-form').classList.remove('hidden');

})
