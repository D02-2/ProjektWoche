const prompt = require('prompt-sync')({ sigint: true });

const films = ['Stars Wars', 'Forrest Gump', 'Schindlers Liste', 'The Dark Knight', 'Chihiros Reise ins Zauberland', 'The Green Mile', 'Das Leben der Anderen', 'Blade Runner', 'Zurück in die Zukunft', 'Jurassic Park'];
const quizFilm = films[Math.round(Math.random() * 9)];

const books = ['Das Tagebuch der Anne Frank', 'Der Kleine Prinz', 'Das Geisterhaus', 'Der Graf von Monte Christo', 'Der kleine Hobbit', 'Der Glöckner von Notre-Dame', 'Gullivers Reisen', 'Der Krieg der Welten', 'Auf der Suche nach der verlorenen Zeit', 'Herr der Fliegen'];


// console.log(quizBook);
// console.log(Math.round(Math.random() * 9));



const emoji = `¯\\_(:/)_/¯`;

const emojiArr = ['¯', '\\', '_', '(', ':', '/', ')', '_', '/', '¯']


let playRounds = 0;
let winRounds = 0;
let lostRounds = 0;

//..........................
//..........................
console.clear();
console.log(emojiArr);
console.log(`
Willkommen zu Shrugman

    ${emoji}
                        `);
const gamerName = prompt('Wie heißt du? ')
console.clear();

const category = prompt(`Hallo ${gamerName} Welche Kategorie möchtest du spielen (Bücher oder Filme (B / F))? `);
console.clear();

// function validationCat() {  return B oder F} 

if (category === 'B') {
    const quizBook = books[Math.round(Math.random() * 9)];

    const quizBookArray = Array.from(quizBook)
    const selectTitle = () => {

        const result = quizBookArray.map((letter) => {
            if (letter !== ' ') {
                return letter.replace(letter, ' _ ')
            } else {
                return '-'
            }
        }).join('');
        return result
    }
    console.clear();
    console.log(selectTitle());
    let resultArr = selectTitle();
    
    while (emojiArr.length <= 10) {
        const guessLetter = prompt('Bitte gib einen Buchstaben ein ');
       
        function searchLetter(arr, char) {
            let rightChar = false;
            const result = arr.map(letter => {
                if (char.toLowerCase() === letter.toLowerCase()) {
                    rightChar = true;
                    return ` ${letter} `
                } else if (letter !== ' ') {
                    return ' _ '
                } else return '-'

            })
            if (!rightChar) {
                // function emojiBuild() return
            }
            for (let i = 0; i < result.length; i++) {
                if (resultArr[i] !== result[i] && resultArr[i] === ' _ ') {
                    resultArr[i] = result[i]
                    console.log('...', resultArr[i]);
                }
                
            }
            // resultArr = [...result];
            console.log(result);
            
            return resultArr;
        }
        // console.clear();
        console.log(searchLetter(quizBookArray, guessLetter));
        console.log(quizBookArray.join(''));
    }
}







