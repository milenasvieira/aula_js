function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por visitar!")
}

function redirecionar(){
    //window.location.href = "https://github.com/milenasvieira";
    window.open("https://github.com/milenasvieira");
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse."
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse.";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
}

function load(){
    alert("Página carregada.");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*function validarIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validarIdade(idade)
console.log(validar);*/

/*function soma (n1, n2){
    return n1 + n2;
}
alert (soma (5,10));*/

/*var d = new Date();
alert(d);*/

/*var count;
for(count = 0; count < 5; count++){
    alert(count);
}*/

/*var count = 0;
while (count < 5){
    console.log(count);
    count = count + 1;
};*/

/*var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};*/

//var nome = "Milena Vieira";
//var idade = 23;
//var idade2 = 10;
//alert(nome + " tem " + idade + " anos.");

//var lista = ["maçã", "banana", "pêra", "laranja"];
//lista.push("uva");
//console.log (lista);
//alert (lista[1]);
