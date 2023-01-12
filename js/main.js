
const switcher = document.querySelector('.btn_js');
switcher.addEventListener('click', function(){

    document.body.classList.toggle('tema-scuro')
    document.body.classList.toggle('tema-chiaro')
    let className = document.body.className;
    if (className == 'tema-chiaro'){ 
        this.textContent = "Il tema è Chiaro";
    }
    else {
       this.textContent = "Il tema è Scuro";
    }
});

