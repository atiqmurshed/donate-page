console.log('added the add money from js');
//adding money from js

document.getElementById('donate').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = document.getElementById('first-amount').innerText;
    const money = parseFloat(addMoney);

    const balance = document.getElementById('input-valu').value;
    const balan = parseFloat(balance);
    if (balan >= 0) {
        const Amount = document.getElementById('main-amount').innerText;
        const AmountNumber = parseFloat(Amount);
        const donateMoney = AmountNumber - balan;
        document.getElementById('main-amount').innerText = donateMoney;
        const newBalance = money + balan;
        document.getElementById('first-amount').innerText = newBalance;
        //add to history cart;

        const p = document.createElement('p');
        p.innerText = `added the money: ${balance}`;

        // const tran = document.getElementById('transaction-history');
        // tran.classList.remove('hidden');
        const tran = document.getElementById('transaction-history');
        tran.appendChild(p);
        let date = new Date();

    }

    else {
        alert('Invalid donate amount !');
    }


});