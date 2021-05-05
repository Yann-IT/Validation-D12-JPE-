let el = document.getElementById('burger');
let nav = document.getElementById('nav');
let checked=false;

el.addEventListener('click', function(e) {
    console.log(checked);
    checked = !checked;
    if(checked){
        nav.classList.add('show');
        el.classList.add('checked');
    }else{
        nav.classList.remove('show');
        el.classList.remove('checked');
    }
  });