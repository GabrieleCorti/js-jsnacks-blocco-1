var numero;
var sum = 0;

for (var i = 0; i < 10; i++ ) {

  numero = parseInt(prompt("scrivi un numero"));
  if (!isNaN(numero)) {

    sum = sum + numero;
    
  }

}

console.log(sum);
