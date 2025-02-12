document.getElementById('dona').addEventListener('click', function (event) {
    event.preventDefault();

    const amon = document.getElementById('amount2').innerText;
    const amonNumber = parseFloat(amon);
    const am = document.getElementById('input-valo').value;
    const amNumb = parseFloat(am);
    if (amNumb >= 0) {
        const newAmount = amonNumber + amNumb;
        document.getElementById('amount2').innerText = newAmount;
    }
    else {
        alert('Invalid donate amount !');
    }

})