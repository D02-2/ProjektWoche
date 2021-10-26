const prompt = require('prompt-sync')({ sigint: true });

const films = ['Stars Wars', 'Forrest Gump', 'Schindlers Liste', 'The Dark Knight', 'Chihiros Reise ins Zauberland', 'The Green Mile', 'Das Leben der Anderen', 'Blade Runner', 'Zurück in die Zukunft', 'Jurassic Park'];
const quizFilm = films[Math.round(Math.random() * 9)];

const books = ['Das Tagebuch der Anne Frank', 'Der Kleine Prinz', 'Das Geisterhaus', 'Der Graf von Monte Christo', 'Der kleine Hobbit', 'Der Glöckner von Notre-Dame', 'Gullivers Reisen', 'Der Krieg der Welten', 'Auf der Suche nach der verlorenen Zeit', 'Herr der Fliegen'];


 // console.log(quizBook);
 // console.log(Math.round(Math.random() * 9));


const emoji = `¯\\\_(:/)_/¯`;

let playRounds = 0;
let winRounds = 0;
let lostRounds = 0;

//..........................
//..........................
console.clear();
console.log(`
Willkommen zu Shrugman

    ${emoji}
                        `);
const gamerName  = prompt('Wie heißt du? ')
console.clear();

const category = prompt(`Hallo ${gamerName} Welche Kategorie möchtest du spielen (Bücher oder Filme (B / F))? `);

// function validationCat() {  return B oder F} 

if (category === 'B') {
    const quizBook = books[Math.round(Math.random() * 9)];
    console.log(quizBook);

    // function selectTitle()
}
