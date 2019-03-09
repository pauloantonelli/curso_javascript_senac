/*1º forma*/
//cria um array
//cria um objeto pelo construtor
var meuArray = new Array();
//atribuir valores
meuArray[0] = "Lua";
meuArray[1] = "Sol";
meuArray[0] = "Céu";
//visualiza o array no indice 0
document.write(meuArray[0]+"<br/>\n");
//visualiza o tamanho do array
document.write(meuArray.length+"<br/>\n");

/*2º forma*/
//cria um array
//cria um objeto pelo construtor
var meuArray2 = new Array('casa','apto', 5, 10, 'fio','5.4');
//visualiza o array no indice 0
document.write(meuArray2[1]+"<br/>\n");
//visualiza o tamanho do array
document.write(meuArray2.length+"<br/>\n");

/*3º forma*/
//cria um array
//cria um objeto pelo construtor
var meuArray3 = new Array;
meuArray3[0] = 3.16;
meuArray3[1] = 5.09;
meuArray3[2] = "X";
//visualiza o array no indice 0
document.write(meuArray3[0]+"<br/>\n");
//visualiza o tamanho do array
document.write(meuArray3.length+"<br/>\n");

/*4º forma*/
//cria um array: tipo literal
//cria um objeto pelo construtor
var meuArray4 = ['1',3,'casa','apto'];
//visualiza o array no indice 0
document.write(meuArray4[2]+"<br/>\n");
//visualiza o tamanho do array
document.write(meuArray4.length+"<br/>\n");

/*5º forma*/
//cria um array associativo
//cria um objeto pelo construtor
var arrayAssociativo = {
    nome: 'Paulo', 
    cidade: 'Taboão',
    estado: 'SP'
}
//visualiza o array no indice
document.write(arrayAssociativo['nome']+"<br/>\n");
document.write(arrayAssociativo.cidade+"<br/>\n");
//visualiza o tamanho do array
document.write(arrayAssociativo.length+"<br/>\n");