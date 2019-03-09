// JavaScript Document
// criar uma função;

function Dispara(){
	//alert('');
//criar meu ponto de referencia (DOM);
var cx = document.getElementById("caixa");
	//alert(cx.name)
	cx.style.display="none";
} 

//chamar uma função
//Dispara();
var i = 0;
function OcultaExibe(){
	var cx = document.getElementById("caixa");
	var bt = document.getElementById("bt0");
	
	if(i == 0){
		cx.style.display="none";
		bt.innerHTML ="Exibe";
		i=1;
	}else{
		cx.style.display="block";
		bt.innerHTML ="Oculta";
		i=0;
	}
	
}

// 
function Soma(){
	var n1 = document.getElementById("n1");
	var n2 = document.getElementById("n2");
	var spaText = document.getElementsByTagName("span");
	
	//SOMA
	var  resultado = parseInt(n1.value) + parseInt(n2.value);
	//alert(resultado);
	spaText[0].innerHTML = resultado;
	
}


// blur quando e deixa o campo pelo usuario

function DeixaCampo(arg){
 var BlurId=document.getElementById(arg);

	if(BlurId.value == 0){
		alert('campo Obrigatorio');
        alert(BlurId.id);
	
		}
	
}

// validação de formulario
//valida();
function valida(){
	//validar o campo nome
	var nome = document.getElementById("nome");
	var ArraySp = document.getElementsByTagName("span");
	
	if(nome.value.length == 0){
		alert('campo obrigatorio');
		ArraySp[0].style.display = "inline";
		return false;
	}else{
		return true;
	}
	
	
	
	//return false; // cancela formulario 
	 // formulario vai para pagina
}

//valida();




