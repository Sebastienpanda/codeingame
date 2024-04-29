const readline = require("./readline");

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const BEGIN = readline();
const END = readline();

const splitBegin = BEGIN.split(".");
const splitEnd = END.split(".");

const dayBegin = parseInt(splitBegin[0]);
const monthBegin = parseInt(splitBegin[1]);
const yearsBegin = parseInt(splitBegin[2]);

const dayEnd = parseInt(splitEnd[0]);
const monthEnd = parseInt(splitEnd[1]);
const yearsEnd = parseInt(splitEnd[2]);

// On enlève - 1 à la date car Janvier commence à l'index 0
const dateBegin = new Date(yearsBegin, monthBegin - 1, dayBegin);
const dateEnd = new Date(yearsEnd, monthEnd - 1, dayEnd);

// On calcule le nombre de jour, dateEnd - dateBegin nous renvois des ms donc on devise par 1000 pour les secondes, 60 pour les minutes, 60 pour les heures et 24 pour la journée
const totalDays = Math.round((dateEnd - dateBegin) / (1000 * 60 * 60 * 24));

// C'est l'année de différence entre l'année récente et l'année ancienne et pareil pour les mois
let yearsDiff = yearsEnd - yearsBegin;
let monthsDiff = monthEnd - monthBegin;

// si month est inférieur à 0 alors on lui ajoute 12 et on descend l'année de -1
if (monthsDiff < 0) {
    monthsDiff += 12;
    yearsDiff--;
}

// si le totalDays est inférieur à 31 et que month est supérieur à 0 alors on enlève 1 au month
if (totalDays < 31 && monthsDiff > 0) {
    monthsDiff--;
}

// si le jour supérieur est inférieur au jour ancien alors on enlève 1 à month
if (dayEnd < dayBegin) {
    monthsDiff--;
}

// On stocke les résultats
let result = [];

// si l'année est supérieur à 0 alors on push et on ajoute s si il y a plus qu'une seul année
if (yearsDiff > 0) {
    result.push(`${yearsDiff} year${yearsDiff > 1 ? "s" : ""}`);
}

// si le mois est supérieur à 0 alors on push et on ajoute s si il y a plus qu'un seul mois
if (monthsDiff > 0) {
    result.push(`${monthsDiff} month${monthsDiff > 1 ? "s" : ""}`);
}

// si totalDays vaux 0 alors on push total 0 days sinon on push la value de days
if (totalDays === 0) {
    result.push(`total 0 days`);
} else {
    result.push(`total ${totalDays} days`);
}

// On renvoie un console log en mettant une virgule à tout nos valeurs en les espacants
console.log(result.join(", "));
