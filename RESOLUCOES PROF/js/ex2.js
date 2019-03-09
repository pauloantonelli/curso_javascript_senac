// JavaScript Document
  // quando carregar a pagina por completo faça
  
  // esta forma e função de evento
 window.onload= function (){
	 // referencia
	 var frm = document.getElementsByTagName("form");
	 var bt = document.getElementsByTagName("button");
	 var borderNome = document.getElementById("nome");
	 var idade = document.getElementById("idade");
	
	 
	 
	 //determinar os atributos via javascript

	 // dar o focos ao campo nome
	 borderNome.focus();
	 // quando perder o foco
	 borderNome.onblur = function(){
		 if(borderNome.value.length == 0){
			 borderNome.style.border ="1px solid red";
			  borderNome.focus();
			
		 }
		 
	 }
	 // quando pressionar uma tecla
	 borderNome.onkeypress = function(){
		 borderNome.style.border ="1px solid #a9a9a9";
		
	 }
	 
	 //
	 idade.onblur = function(){
				 
		 if(idade.value.length == 0){
			 idade.style.border ="1px solid red";
			 idade.focus();
			
		 }
	 }

	  idade.onkeypress = function(){
		 idade.style.border ="1px solid #a9a9a9";
		
	 }

 // aplicar um evento ao botão
 // desta forma e um função de evento

	 
 bt[0].onclick = function(){
    
	//frm[0].submit()
	
    frm[0].action ="processa.php";
    frm[0].method ="get"; 
	frm[0].submit();

 
 }
 
 
 
 }	
 
 
 
 
 