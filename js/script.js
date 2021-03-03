var cognome = prompt("Inserisci il tuo cognome: ");
var listaCognomi = ["bianchi", "rossi", "duzioni", "balsano", "verdi"];
cognome = cognome.toLowerCase();
listaCognomi.push(cognome);
console.log(listaCognomi);
var listaCognomiAlfabetica = listaCognomi.sort();
console.log(listaCognomiAlfabetica);
var numIndex = listaCognomiAlfabetica.indexOf(cognome) + 1;
alert("Sei il numero " + numIndex + " nella lista.");
