var cognome = prompt("Inserisci il tuo cognome: ");
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
listaCognomi.push(cognome);
console.log(listaCognomi);
var listaCognomiAlfabetica = listaCognomi.sort();
console.log(listaCognomiAlfabetica);
var numIndex = listaCognomiAlfabetica.indexOf(cognome) + 1;
alert("Sei il numero " + numIndex + " nella lista.");
