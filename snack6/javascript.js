var numeroUtente = parseInt(prompt("dimmi un numero"))

// for (var i = 1; i <= numeroUtente; i++ ) {
//
//   console.log(i * i);
//
// }
var i = 1;
while (i <= numeroUtente) {

  if (!isNaN(numeroUtente)) {
    console.log(i * i);
  }
  ++i;

}
