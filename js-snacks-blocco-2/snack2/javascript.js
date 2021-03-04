var numeroUtente;
do {

  numeroUtente = parseInt(prompt("dimmi un numero"));

} while (isNaN(numeroUtente));

if (numeroUtente % 2 == 0) {

  console.log(numeroUtente);

} else {

  console.log(numeroUtente + 1);

}
