// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
//  se il numero è presente nella lista dei numeri generati, la partita termina,
//  altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o
// raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.
console.log("inizio script");

// funzione generatore di 16 numeri random da 1 a 100
function numGen (min, max) {
  var n = Math.floor((Math.random() * (max - min) + min));
  return n;
}
// array vuoto dove inserire i numeri generati
var list =[];
console.log(list);
// ciclo while generatore dei 16 numeri random
var i =1;
while (i <= 16) {
  var num = numGen(1, 100);
  var ctrln = list.indexOf(num);
  if (ctrln < 0) {
    list.push(num);
    i++;
console.log("cont if" + ctrln);
  }

}
console.log("controllo" + ctrln);
