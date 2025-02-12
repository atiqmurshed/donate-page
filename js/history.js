document.getElementById('history-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const btni = document.getElementById('history-btn');
    btni.classList.add('bg-green-300');

    const donat = document.getElementById('donate-btn');
    donat.classList.remove('bg-green-300');

    const dou = document.getElementById('show-section');
    dou.classList.add('hidden');
    // console.log('donation add');

    const doi = document.getElementById('show-section2');
    doi.classList.add('hidden');


    const doii = document.getElementById('show-section3');
    doii.classList.add('hidden');

    const tran = document.getElementById('transaction-history');
    tran.classList.remove('hidden');
    tran.classList.add('bg-yellow-200');
    const how = document.getElementById('new');
    how.innerHTML = new Date();
    
    // tran.innerHTML = new Date();

});

