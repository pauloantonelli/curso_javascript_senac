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
var i = null;
function valida(){
//var i = 1; local
	
	//validar o campo nome
	var nome = document.getElementById("nome");
	//var ArraySp = document.getElementsByTagName("span");
	
	// pegar  referencia no campo senha
	var sexo = document.getElementsByName("sexo");
	// pegar ref da regista
	var rev1 = document.getElementById("rev1");
	var rev2 =  document.getElementsByName("rev2");//array
	
	if( (rev1.checked ==false) && (rev2[0].checked == false) ) {
		
		  alert('Campo Rev Obr.')
		  Erro(2);
		 i++;
	}
	
	
	
	
	//logico && -and ; \\ -ou ; ! - negação
	if(sexo[0].checked == false && sexo[1].checked == false){
		alert('campo sexo Obrig');
		Erro(1);
		i++;
	}
	
	
	
	if(nome.value.length == 0){
		nome.focus();
		alert('campo obrigatorio');
		Erro(0);
		i++;
	}
	
	if(i == null){
		// vai para pagina
	
		return true;
		
	}
    else{
		i=null;	
		return false; }
		
		
	
}

function Limpa(indice){
	var tagSpan = document.getElementsByTagName("span");
	
	tagSpan[indice].style.display="none";

}

function Erro(indice){
	var tagSpan = document.getElementsByTagName("span");
	
	tagSpan[indice].style.display="inline";
}


//valida();




