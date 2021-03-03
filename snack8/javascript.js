

var numero = prompt("dimmi un numero di 4 cifre");

var sum = 0;

for (var i = 0; i < numero.length; i++){

  sum += parseInt(numero[i]);

}

console.log(sum);
