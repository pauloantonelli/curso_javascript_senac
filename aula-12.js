//Javascript
window.onload = function(){
    //let tagImg = document.querySelector('img');
    let tagImg = document.images;//objeto de imagem
    let btn = document.querySelectorAll('button');
    let dir = "_ref/";
    let end = ['0','1','2','3'];
    let ext = ".jpg";
    let cont = 0;
    console.log(tagImg.length);//saber quantas imagens tem no html
    //no click troca a imagem
    //tagImg[0].height = '500px';
    btn[1].onclick = function(){
        tagImg[0].src = dir + end[cont] + ext;//insere ou altera o valor de src, pode ser usado com outros atributos como width, heigth...
        if(cont >= 3){
            cont = 0;
        }else{
            cont += 1;
        }
        clearInterval(parar);//para a execussao do interval
    }
    btn[0].onclick = function(){
        parar = this.setInterval(minhaFuncao, 2000);
    }
    //funcao de repeticao automatica
    let parar = this.setInterval(minhaFuncao, 2000);
    function minhaFuncao(){
        tagImg[0].src = dir + end[cont] + ext;//insere ou altera o valor de src, pode ser usado com outros atributos como width, heigth...
        if(cont >= end.length -1){
            cont = 0;
        }else{
            cont += 1;
        }
    }
}