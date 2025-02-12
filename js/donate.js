document.getElementById('donate-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const btni =  document.getElementById('donate-btn');
    btni.classList.add('bg-green-300');

    const donat = document.getElementById('history-btn');
    donat.classList.remove('bg-green-300');

    const m = document.getElementById('show-section');
    m.classList.remove('hidden');

    const sec2 = document.getElementById('show-section2');
    sec2.classList.remove('hidden');
   
    
    const sec3 = document.getElementById('show-section3');
    sec3.classList.remove('hidden');

    const tran = document.getElementById('transaction-history');
    tran.classList.add('hidden');

});


