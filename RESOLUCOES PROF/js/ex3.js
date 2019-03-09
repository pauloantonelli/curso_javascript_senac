// JavaScript Document
window.onload = function(){
 // pegar a imagem
	var tagImg = document.images; // objeto de imagens
	var bt = document.getElementsByTagName("button");
	// saber quantas imagens tem no html;
	//alert(tagImg.length); //quantidade de imagem
	//alert(tagImg[0].src); // inseri ou ler caminho
	// array de imagens
	var ArrayImg = ["img02.jpg","img03.jpg","img01.jpg"];
	
	var i=0;
	
	
	// criar uma função de evento
	bt[0].onclick = function(){
		 
		//tagImg[0].src = "img/"+ArrayImg[i];
		//i++;
		//tagImg[0].height ="1000";
		// para 
		clearInterval(bn);
		
	}
	
	bt[1].onclick = function(){
		 
		//tagImg[0].src = "img/"+ArrayImg[i];
		//i++;
		//tagImg[0].height ="1000";
		// para 
		 bn = setInterval(minhaFuncao,1000);
		
	}
	
	// Função que executa em determinado tempo em milisigundos
	
	var bn = setInterval(minhaFuncao,1000);
	
	
	//var i =0;
	function minhaFuncao(){
		//document.write(i);
		//i++;		
		tagImg[0].src = "img/"+ArrayImg[i]; 
		if(i < ArrayImg.length -1){
		  i++;
		}else{ i =0 ;}
	}
	
}
