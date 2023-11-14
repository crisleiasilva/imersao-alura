var nome = prompt ('Qual seu nome?');
var valorEmDolar = prompt ('Qual valor você quer calcular?');
var cotacaoDoDolar = 5.32;
var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);
alert(" Olá "  + nome + ", seu valor em Real é  R$ " + valorEmReal);