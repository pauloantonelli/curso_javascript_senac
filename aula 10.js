function valida(){
    //validar campo nome
    var nome = document.getElementById("nome");
    var idade = document.getElementById("idade");

    var escolaridade = document.getElementById('escola');
    var areaAtuacao1 = document.getElementById('gerencia');
    var areaAtuacao2 = document.getElementById('financeiro');
    var areaAtuacao3 = document.getElementById('recepcao');

    var i = null;

    if(nome.value.length == 0){//value é o valor padrao do html
        nome.focus();//foca no campo nome se der errado
        erro(0);
        i++;
    }
    if(idade.value == false){//value é o valor padrao do html
        nome.focus();//foca no campo nome se der errado
        erro(1);
        i++;
    }
    if(escolaridade.value == 'escolha'){
        erro(2);
        i++;
    }
    if(areaAtuacao1.checked == false && areaAtuacao2.checked == false && areaAtuacao3.checked == false){
        erro(3);
        i++;
    }

    if(i == null){
        return true;
    }else{
        return false;
    }
}

function limpa(indice){
    var tagSpan = document.getElementsByTagName('span');
    tagSpan[indice].style.display = 'none';
}
function erro(indice){
    var tagSpan = document.getElementsByTagName('span');
    tagSpan[indice].style.display = 'inline';//inline é na mesma linha
}

//ANOTACAO
//return so pode ter um retorne na saida
//variavel inicializada global, mas é declarada dentro de uma funcao sem o var ela ainda é a variavel global
//getElementsByTagName e outros com 'S' sao mais de um, ou seja um array e deve ser trabalhado com array[];
//onblur é quando perde o foco
//onchange é quando algo muda
//onkeypress quando a tecla é presionada e solta
//onkeydown quando a tecla é precionada
//onkeyup quando a tecla é e solta