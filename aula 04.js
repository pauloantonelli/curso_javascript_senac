/*D.O.M pegando elementos*/
//pega um ponto de referenciaa tag
var divTag = document.getElementsByTagName('div');
//seleciona a 3ª div e inputa a nova string
divTag[2].innerHTML = "Pegou a div 3";
//aplicar um estilo css na tag
divTag[2].style.border = "1px solid #f03";
divTag[2].style.height = "100%";
divTag[2].style.width = "100%";
divTag[2].style.backgroundColor = "blue";
divTag[2].style.color = "white";
//div 1 colocar um texto, cor, w, h = 500
divTag[1].innerHTML = 'Essa div é a 01';
divTag[1].style.color = 'white';
divTag[1].style.backgroundColor = '#f03';
divTag[1].style.width = '500px';
divTag[1].style.height = '500px';
//div 3 colocar um texto, cor, w, h = 100
divTag[3].innerHTML = 'Agora é a div 03';
divTag[3].style.color = 'white';
divTag[3].style.backgroundColor = 'purple';
divTag[3].style.width = '100px';
divTag[3].style.height = '100px';

var btn = document.getElementsByTagName('button');
  
btn[0].onclick = function caixaAlerta(){ 
    alert('Voce clicou na caixa');
}