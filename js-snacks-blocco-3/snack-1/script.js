var bici = [
    {
        nome: "bici1",
        peso: 3000
    },
    {
        nome: "bici2",
        peso: 1000
    },
    {
        nome: "bici3",
        peso: 9000
    },
    {
        nome: "bici4",
        peso: 2000
    },
    {
        nome: "bici5",
        peso: 500
    }
]


var biciPeso= bici[0];
for (var i = 0; i < bici.length; i++) {
     
    if (bici[i]["peso"] < biciPeso["peso"] ) {

        biciPeso = bici[i];

    }
    
}

console.log(biciPeso);