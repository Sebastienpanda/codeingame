const readline = require("./readline");

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const BEGIN = readline();
const END = readline();

// dès qu'on trouve un point on split les valeurs dans un nouvel array
const splitBegin = BEGIN.split(".");
const splitEnd = END.split(".");

// On stock le jours, le mois et l'année dans des nouvelles variables
const dayBegin = splitBegin[0];
const monthBegin = splitBegin[1];
const yearsBegin = splitBegin[2];

const dayEnd = splitEnd[0];
const monthEnd = splitEnd[1];
const yearsEnd = splitEnd[2];

function getTotalDaysYears() {
    const dateBegin = new Date(BEGIN);
    const dateEnd = new Date(END);
    const totalTime = dateEnd.getTime() - dateBegin.getTime();
    const days = Math.round(totalTime / (1000 * 3600 * 24));
    return days;
}
function getTotalDaysMonth() {
    const dateBegin = new Date(BEGIN);
    const dateEnd = new Date(END);
    const totalTime = dateEnd.getTime() - dateBegin.getTime();
    const totalDays = Math.round(totalTime / (1000 * 60 * 60 * 24));
    console.log(totalDays * 31);
}

// Même jours, même mois mais années différente
if (dayBegin === dayEnd && monthBegin === monthEnd && yearsBegin < yearsEnd) {
    const years = yearsEnd - yearsBegin;
    const totalDays = getTotalDaysYears();
    console.log(`${years} years, total ${totalDays} days`);
}

// Même jours, même années mais mois différent
if (dayBegin === dayEnd && monthBegin < monthEnd && typeof yearsBegin === typeof yearsEnd) {
    const month = monthEnd - monthBegin;
    const totalDays = getTotalDaysMonth();
    console.log(`${month} months, total ${totalDays} days`);
}

//Même jours, même mois et mêmes années
if (dayBegin === dayEnd && monthBegin === monthEnd && typeof yearsBegin === typeof yearsEnd) {
    console.log("total 0 days");
}
