function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var squadre = [
    {
        nome: "samp",
        falliSubiti: 0,
        punti: 0
    },
    {
        nome: "milan",
        falliSubiti: 0,
        punti: 0
    },
    {
        nome: "inter",
        falliSubiti: 0,
        punti: 0
    }
];


var nomiFalli = [];

for (var i = 0; i < squadre.length; i++) {
    
    squadre[i]["falliSubiti"] = randomInt(0, 10);
    squadre[i]["punti"] = randomInt(0, 10);
    
    nomiFalli.push({
        nome: squadre[i]["nome"],
        falliSubiti: squadre[i]["falliSubiti"],
    });
    
}

console.log(nomiFalli);
