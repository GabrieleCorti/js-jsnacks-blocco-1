var arrUno = [1, 2, 3, 4, 5, 6, 7];
var arrDue = [1, 2, 3, 4];

if (arrUno.length > arrDue.length){

  var major = arrUno;
  var minor = arrDue;

} else if (arrUno.length < arrDue.length){

  var major = arrDue;
  var minor = arrUno;

}


while (major.length > minor.length){

  minor.push(Math.random());

}

console.log(arrUno);
console.log(arrDue);
