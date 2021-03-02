var parolaUno = prompt("inserisci la prima parola");
var parolaDue = prompt("inserisci la seconda parola");

if (parolaUno.length > parolaDue.length) {

  console.log(parolaUno);

} else if (parolaUno.length < parolaDue.length) {

  console.log(parolaDue);

} else if (parolaUno.length == 0 || parolaDue.length == 0) {

  console.log("ricarica la pagina");

} else if ( !isNaN(parseInt(parolaUno)) || !isNaN(parseInt(parolaDue)) ) {

  console.log("ricarica la pagina");

} else {

  console.log("le parole sono lunghe uguali");

}
