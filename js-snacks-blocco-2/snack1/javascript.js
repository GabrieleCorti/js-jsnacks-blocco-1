var i = 0;
var sum = 0;
var numero;

// while ( i < 5 ) {
//
//   numero = parseInt(prompt("dimmi un numeor"));
//   if (!isNaN(numero)) {
//
//     sum += numero;

//   }
//   ++i;
//
// }

//potevo mettere un do {numero = parseInt(prompt("dimmi un numeor"))} while (isNaN(numero))
//per avere una validazione più forte fino a che non è un numero te lo chiedo. 

for ( var j = 0; j < 5; j++ ) {

  numero = parseInt(prompt("dimmi un numeor"));
  if (!isNaN(numero)) {

    sum += numero;

  }

}

console.log(sum);
