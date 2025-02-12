document.getElementById('don').addEventListener('click', function(event){
    event.preventDefault();

    const i = document.getElementById('amount3').innerText;
    const y = parseFloat(i);
    const j = document.getElementById('input-val').value;
    const jNum = parseFloat(j);
    if(jNum >= 0){
        const newDisplay = y + jNum;
        document.getElementById('amount3').innerText = newDisplay;
    }
    else{
        alert('Invalid Donate amount !');
    }


})