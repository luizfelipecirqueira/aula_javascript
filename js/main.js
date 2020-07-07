function button(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://globallab.org/en/");
    //window.location.href = "https://globallab.org/en/";
}

function trocar(){
    document.getElementById("trocar").innerHTML = "Obrigado por clicar aqui";
    //alert("Trocar texto");
}

function load(){
    alert("Página carregada");
}

function funcaochange(elemento){
    console.log(elemento.value);
}

/*function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5,10));

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }
    else{
        validar = false;
    }
}
var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
/*var d = new Date();
alert(d);*/
/*var count;
for(count = 0; count <= 5; count++){
    alert(count);
};*/

/*var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1; //ou count++//
}*/

/*var idade = prompt("Qual a sua idade?");
if(idade >=18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
}*/

/*var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta.nome);
console.log(fruta.cor);
var nome = "Luiz Felipe";
var idade = 26;
var idade2 = 10;
var frase = "Meu projeto javascript";
//alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("projeto", "curso"));
console.log(frase.toLocaleLowerCase());
console.log(frase.toLocaleUpperCase());
var lista = ["Maçã", "Pêra", "laranja"];
lista.push("uva");
console.log(lista);
//lista.pop();
console.log(lista.toString());*/