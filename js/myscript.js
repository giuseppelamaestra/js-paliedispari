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
