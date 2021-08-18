// function doubleIt(num) {
//     const result = num * 2
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7)
function getinputvalue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear the infut field
    inputField.value = '';

    return amountValue;
}

function uodateTotalField(totalFieldId, amount) {

    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText)
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBallence() {
    const ballenceTotal = document.getElementById('ballence-total');
    const ballenceTotalText = ballenceTotal.innerText;
    const previousBallenceTotal = parseFloat(ballenceTotalText);
    return previousBallenceTotal;
}

function updateBallence(depositAmount, isAdd) {
    const ballenceTotal = document.getElementById('ballence-total');
    // const ballenceTotalText = ballenceTotal.innerText;
    // const previousBallenceTotal = parseFloat(ballenceTotalText);
    const previousBallenceTotal = getCurrentBallence();
    if (isAdd == true) {
        ballenceTotal.innerText = previousBallenceTotal + depositAmount
    }
    else {
        ballenceTotal.innerText = previousBallenceTotal - depositAmount
    }


}


document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositeInput = document.getElementById('deposit-input');
    // const depositAmountText = depositeInput.value;
    // const depositAmount = parseFloat(depositAmountText);


    // set current deposit-----------
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText)
    // depositTotal.innerText = previousDepositTotal + depositAmount;

    // update ballence
    // const ballenceTotal = document.getElementById('ballence-total');
    // const ballenceTotalText = ballenceTotal.innerText;
    // const previousBallenceTotal = parseFloat(ballenceTotalText);
    // ballenceTotal.innerText = previousBallenceTotal + depositAmount

    const depositAmount = getinputvalue('deposit-input');
    if (depositAmount > 0) {
        uodateTotalField('deposit-total', depositAmount);
        updateBallence(depositAmount, true);

    }

});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdarwAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdarwAmountText);


    // update withdraw
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previouswithdrawTotalText = withdrawTotal.innerText;
    // const previouswithdrawTotal = parseFloat(previouswithdrawTotalText);
    // withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount;


    // update ballence after withdraw
    // const ballenceTotal = document.getElementById('ballence-total')
    // const ballenceTotalText = ballenceTotal.innerText;
    // const previousBallenceTotal = parseFloat(ballenceTotalText);
    // ballenceTotal.innerText = previousBallenceTotal - withdrawAmount;
    const withdrawAmount = getinputvalue('withdraw-input');
    const currentBallence = getCurrentBallence()

    if (withdrawAmount > 0 && withdrawAmount < currentBallence) {
        uodateTotalField('withdraw-total', withdrawAmount);
        updateBallence(withdrawAmount, false);


    }
    if (withdrawAmount > currentBallence) {
        console.log('oi miya amner ato tk nai')
    }

})