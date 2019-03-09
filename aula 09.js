function valida(){
    //validar campo nome
    var nome = document.getElementById("nome");
    //var arraySpan = document.getElementsByTagName('span');
    var pegarSexo = document.getElementsByName('sexo');
    var pegarInteresse1 = document.getElementById('rev1');
    var pegarInteresse2 = document.getElementById('rev2');
    var estado = document.getElementById('uf');
    var i = null;
    if(nome.value.length == 0){//value é o valor padrao do html
        nome.focus();//foca no campo nome se der errado
        erro(0);
        i++;
    }
    if(pegarSexo[0].checked == false && pegarSexo[1].checked == false){
        erro(1);
        i++;
    }
    if(pegarInteresse1.checked == false && pegarInteresse2.checked == false){
        erro(2);
        i++;
    }
    if(estado.value == 'Escolha'){
        erro(3);
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