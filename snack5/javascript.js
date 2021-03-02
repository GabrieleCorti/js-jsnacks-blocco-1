var numeriDispari = [];

for (var i = 0; i < 6; i++) {

  var numeroChiesto = parseInt(prompt("dimmi un numero"));

  if (numeroChiesto % 2 == 1) {

    numeriDispari.push(numeroChiesto);

  }

}

console.log(numeriDispari)
