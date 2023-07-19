const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}

// Value changing for single product

function test(){
    var x= document.getElementById("optionList");
    var value = x.value;
    var disp = document.getElementById("result");
    disp.innerHTML=value;
    }
