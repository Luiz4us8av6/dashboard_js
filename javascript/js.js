const botao_abrir = document.getElementById('botao_abrir');
const botao_fechar = document.getElementById('botao_fechar');
const sidebar = document.getElementById('sidebar');
const button_black =document.getElementsByClassName('button_black')[0];
const span_lista = document.getElementsByClassName('span_lista');

function toggleMenu(){
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

botao_abrir.addEventListener('click', toggleMenu);


function togglefechar(){
    
    sidebar.classList.remove('active');
}

botao_fechar.addEventListener('click', togglefechar);


function modo_black(){
    document.getElementById('sidebar').classList.toggle('dark');
    document.getElementById('body').classList.toggle('dark');
    document.getElementById('content4_2').classList.toggle('dark');
    document.getElementById('content1').classList.toggle('dark');
    document.getElementById('content2').classList.toggle('dark');
    document.getElementById('content3').classList.toggle('dark');
    document.getElementById('table').classList.toggle('dark');
    document.getElementById('nav').classList.toggle('dark');
    document.getElementById('img_light').classList.toggle('dark');
    const a = document.getElementsByClassName('a');
    

    for(i=0;i<3;i++){
        document.getElementsByClassName('content4_4_modulos')[i].classList.toggle('dark_especial');
    }
    for(i=0;i<6;i++){
        document.getElementsByClassName('titulos')[i].classList.toggle('dark_titulos');
    }
    for(i=0;i<(a.length);i++){
       a[i].classList.toggle('dark_a');
    }
    for(i=0;i<(a.length);i++){
        span_lista[i].classList.toggle('dark');
    }
}

button_black.addEventListener('click', modo_black);

