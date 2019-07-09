// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
//  se il numero è presente nella lista dei numeri generati, la partita termina,
//  altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o
// raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.
console.log("inizio script");


function numGen () {
  var n = Math.floor((Math.random() * 100) +1);
  return n;
}

var list =[];
console.log(list);
var i =1;
while (i <= 16) {
  var num = numGen();
  controln = list.indexOf(num);
  if (controln < 0) {
    list.push(num);
    i++;
  }

}
