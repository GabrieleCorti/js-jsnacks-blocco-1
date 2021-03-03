var numeroUtente = parseInt(prompt("dimmi un numero"));


do {
  var numeroUtente = parseInt( prompt("dimmi un numero") );
} while ( isNaN(numeroUtente) );

for (var i = 1; i <= numeroUtente; i++ ) {

  console.log(i * i * i);

}
