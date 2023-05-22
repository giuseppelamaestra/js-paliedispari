//Palindroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma


let  Word = prompt("type a word")
let ReverseWord = PalindromeDetector(Word)

console.log(Word)

function PalindromeDetector(parola){
    let ReverseWord = '';
  
    let i = parola.length - 1;
  
    while (i >= 0) {
      ReverseWord += parola[i];
      i--;
    }

    return ReverseWord
}

if(Word == ReverseWord){
    console.log('the word is  palindrome');
  } else {
    console.log('The word is not palindrome');
}


//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

const choice = prompt("choose even or odd") 
const number = parseInt(prompt("enter a value from 1 to 5"))




function randomNumber(num){
    const randomNumber = Math.floor(Math.random() * 5 ) + 1
    
    return randomNumber
}

console.log(randomNumber())