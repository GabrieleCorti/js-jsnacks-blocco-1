var nomi = ["lmao", "carlo", "andrea", "zzzzzzz"];
var cognomi = ["rolf", "corti", "gasparini"];
var tizioFittizio;

for (var i = 0; i < 3; i++){

  tizioFittizio = nomi[Math.trunc(Math.random() * nomi.length)] + " " + cognomi[Math.trunc(Math.random() * cognomi.length)];
  console.log(tizioFittizio);

}
