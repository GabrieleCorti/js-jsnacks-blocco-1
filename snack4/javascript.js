var lista = ["fgjvdafgfe", "dsfvafd", "sdfd", "guest"];
var tuoNome = prompt("Dimmi il tuo nome");

if (tuoNome != 0) {

  for (var i = 0; i < lista.length; i++ ) {
    if (tuoNome.toLowerCase() == lista[i].toLowerCase()) {

      var permesso = true;

    }
  }

  if(permesso == true) {

    console.log("puoi entrare");

  } else {

    console.log("non puoi entrare");

  }

} else {

  console.log("ricarica la pagina")

}
