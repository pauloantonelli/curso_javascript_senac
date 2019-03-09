var i = 0;
function ocultarMostra(){
    var caixa = document.getElementById('texto');
    var btn = document.getElementById('btn');
    if(i == 0){
        caixa.style.display = 'none';
        btn.innerHTML = 'Exibe';
        i = 1;
    }else{
        caixa.style.display = 'block';
        btn.innerHTML = 'Oculta';
        i = 0;
    }
}

function soma(){
    var n1 = document.getElementById('n1');
    var n2 = document.getElementById('n2');
    var spanText = document.getElementsByTagName('span');

    var resultado = parseInt(n1.value) + parseInt(n2.value);
    spanText[0].innerHTML = resultado;
}

function deixaCampo(arg){
    var bluId = document.getElementById(arg);
    alert(bluId.value);
    if(bluId.value.length == 0){
        alert("campo obrigatorio");
    }
}