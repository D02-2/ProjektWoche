const prompt = require('prompt-sync')({ sigint: true });

//const name = prompt('Wie heißt du?');
const emoji ="¯\_(:/)_/¯"
const emojiArray= emoji.split("")
const words ={
    movies:["Prestige","Inception","Parasite","Interstellar","Whiplash","Memento","Coco Chanel"],
  programming:["Php","Javascript","Scala","Mysql","Phython"]
}

//Get Random Property

const allKeys =Object.keys(words)
//console.log(allKeys);

const randomPropNumb=Math.floor(Math.random() * allKeys.length)
//console.log(randomPropNumb);
// Random Kategorie
const randomPropName=allKeys[randomPropNumb]
//console.log(randomPropName);
const randomPropValue=words[randomPropName]
//console.log(randomPropValue);

const randomValueNumber=Math.floor(Math.random() * randomPropValue.length);
//console.log(randomValueNumber);
const randomValueValue = randomPropValue[randomValueNumber]
console.log(randomValueValue);
console.log(randomPropName);
//******************************* */
//select Letters Guess 
//const letterGuess=
//Convert Word choses to Array

//console.log("letter and space", letterAndSpace);

// Replace space with -
function selectTitle(){
    const letterAndSpace = Array.from(randomValueValue)
    const result=letterAndSpace.map(letter =>{
       if (letter !== ' '){
        return letter.replace( letter, " _ ");
       }else{
           return "-";
       } 
    
     
    })
    console.log(result.join(''));
}

