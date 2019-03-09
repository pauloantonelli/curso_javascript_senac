// JavaScript Document
// espera carregar a pagina para fazer algo
window.onload = function(){
	
	//pegar a referência do campo cep
	var cep = document.getElementById("cep");
	
	//objeto chamado XMLHttpResquest (coração do ajax)
	var objAjax = new XMLHttpRequest();  
	
	
	// quando perder o focus faça algo
	cep.onblur = function(){
		//alert('dip');
		// direciona para pagina via cep com cep preenchido
		var pagina = 'http://viacep.com.br/ws/';
		pagina += cep.value+"/xml/";
		
		//alert(pagina);
		//preparar o configuração
		// sicrona padrão true
		//assicrona false
		objAjax.open('get',pagina,true);
		// enviar os dados
		objAjax.send();
		
		// AGUARDA MUDANÇA NO SERVIDOR QUANDO EXECUTADO O METODO SEND();
		objAjax.onreadystatechange = function(){
			// trata todos os estado do servido
			
			/* readyState - estado do servidor resposta:
			
			  0    - não incializado;
			  1    - carregando os dados
			  2    - carregado os dados
			  3    - transmitindo os voltado
			  4    - completo - já chegou dos
			
			
			*/
			if(objAjax.readyState == 0 ){
				//alert('não inicializou');
			}
           if(objAjax.readyState == 1 ){
				//alert('carregando');
			}
			if(objAjax.readyState == 2 ){
				//alert('carregado');
			}
			if(objAjax.readyState == 3 ){
				//alert('transmitido');
			}
			if(objAjax.readyState == 4 ){
				//alert('completo');
				// saber com o servidor esta fisicamente
				/*
				   200 -  servidor ok
				   403 -  proibido
				   400 -  servidor não encontrado
				   500 - erro interno no servidor
				*/
				if(objAjax.status == 200){
					//alert('ok');
					// ver a resposta do servidor
					// responseText - forma de texto
					// responseXML  - forma de xml
					
					//alert(objAjax.responseText);
					
					var XML = objAjax.responseXML;
					
					// referencia do form
				     // rua
					document.getElementById('end').value = XML.getElementsByTagName('logradouro')[0].firstChild.nodeValue;
					
					// bairro 
					document.getElementById('bairro').value = XML.getElementsByTagName('bairro')[0].firstChild.nodeValue;
					
					// cidade
					document.getElementById('cidade').value = XML.getElementsByTagName('localidade')[0].firstChild.nodeValue;
					
					
					// estado
					document.getElementById('uf').value = XML.getElementsByTagName('uf')[0].firstChild.nodeValue;
					
				}
				
				if(objAjax.status == 403){
					//alert('proibido');
				}
                if(objAjax.status == 400){
					//alert('não encontrado');
				}				
				if(objAjax.status == 500){
					//alert('não encontrado');
				}
				
			}
		}
		
		
		
	}
	
	
	
}
