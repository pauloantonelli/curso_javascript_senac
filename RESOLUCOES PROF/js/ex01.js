// JavaScript Document
// pegar os referencia


window.onload = function(){
//pegar os elementes	
 var frm  =document.getElementsByTagName("form");
//atribuitos formulario
	frm[0].action = "processa.php";
	frm[0].method = "post";
 
/*var nome = document.getElementById("nome");
// quando carregar dar o focus
nome.focus();
*/	
// função de evento onblur em atributo html
/*nome.onblur= function(){
	if(nome.value.length == 0){
		alert('as');}
}	
*/	



}

document.getElementsByTagName("button")[0].onclick = function(){	
	//frm[0].submit();
	alert('')}




