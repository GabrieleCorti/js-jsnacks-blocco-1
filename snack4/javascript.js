
var nUno = parseInt(prompt("inserisci il primo numero"));
var nDue = parseInt(prompt("inserisci il secondo numero"));

if (nUno > nDue) {

  console.log(nUno);

} else if (nUno < nDue) {

  console.log(nDue);

} else if (isNaN(nUno) || isNaN(nDue)) {

  console.log("non sai cosa sia un numero perchè probailmente non hai finito la prima elementare, ricarica la pagina e chiedi aiuto ad un adulto");

} else {

  console.log("i due numeri sono uguali");

}
