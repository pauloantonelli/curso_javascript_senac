//Javascript
/*var borderNome = document.querySelector("input[id=nome]");
borderNome.style.border = '1px solid red';
*/
window.onload = function(){//quando carregar a pagina por completo faca
    var borderNome = document.querySelector("input[id=nome]");
    var borderIdade = document.querySelector("input[id=idade]");
    var frm = document.querySelector("form");
    var btn = document.querySelector('button');
    //definicao atributos html
    //frm.action = "processa.php";
    //frm.method = "POST";
    /*borderNome.value = localStorage.getItem('nome');
    borderIdade.value = localStorage.getItem('idade');*/
    //ao carregar dar foco na idade
    //ao mudar print a borda de vermelho
    borderNome.focus();
    borderNome.onblur = function(){
        if(borderNome.value.length == 0){
            borderNome.style.border = "1px solid #f03";
            borderNome.focus();
        }else{
            borderIdade.focus();
        }
    }
    
    borderIdade.onblur = function(){
        if(borderIdade.value.length == 0){
            borderIdade.style.border = "1px solid #f03";
            borderIdade.focus();
        }
    }
    //ao precionar uma tecla muda a borda
    borderNome.onkeypress = function(){
        borderNome.style.border = "1px solid #a9a9a9";
    }
    borderIdade.onkeypress = function(){
        borderIdade.style.border = "1px solid #a9a9a9";
    }
    //aplicar evento ao botao
    btn.onclick = function(){
        frm[0].action = 'processa.php';
        frm[0].method = 'GET';
        frm[0].submit();//forca o navegador a criar o submit no form
        /*localStorage.setItem("nome",borderNome.value);
        localStorage.setItem("idade",borderIdade.value);*/
    }
}