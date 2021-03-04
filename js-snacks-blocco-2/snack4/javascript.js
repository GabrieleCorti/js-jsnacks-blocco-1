var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;

for (var i = 1; i < numeri.length; i++) {

  if ( i % 2 == 1) {

    sum += numeri[i];

  }

}

console.log(sum);
