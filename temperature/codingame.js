const readline = require("./readline");

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // on met les valeurs en int de chaque ligne

// On retourne 0 si il y a pas de nombres
if (!n) {
    return console.log("0");
}

var inputs = readline().split(" "); // On split chaque ligne par un espace vide

let numberPos = []; // Array des nombres positif
let numberNega = []; // Array des nombres négatif
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]); // une température exprimée en entier allant de -273 à 5526
    if (t >= 0) {
        // Si la température est supérieur ou égale à zéro alors cela est un nombre positif
        numberPos.push(t);
    } else {
        // Sinon cela est un nombre négatif
        numberNega.push(t);
    }
}

// Si numberPos vaux un array vide alors cela signifie qu'on a que des nombres négatifs
// On prend la valeur max de la copie du tableau négatif
if (numberPos.length === 0) {
    return console.log(Math.max(...numberNega));
}

// On prend les valeurs positif et négatif et on prends leur valeur min de leur copie de leur tableau
const tPositif = Math.min(...numberPos);
const tNegatif = Math.min(...numberNega);

// On enlève les - devant les nombres Negatif pour les comparer à positif
const AbsoluPositif = Math.abs(tPositif);
const AbsoluNegatif = Math.abs(tNegatif);

// Si positif est supérieur ou égale à Negatif alors cela est un nombre négatif
if (AbsoluPositif >= AbsoluNegatif) {
    console.log(AbsoluNegatif);
} else {
    // Sinon cela est un nombre positif
    console.log(AbsoluPositif);
}
