var parolaUno = prompt("inserisci la prima parola");
var parolaDue = prompt("inserisci la seconda parola");

if (parolaUno.length > parolaDue.length) {

  console.log(parolaUno);

} else if (parolaUno.length < parolaDue.length) {

  console.log(parolaDue);

} else {

  console.log("le parole sono lunghe uguali");

}
