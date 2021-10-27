// Variables........................

const prompt = require('prompt-sync')({ sigint: true });

const chalk = require('chalk');

const films = ['Stars Wars', 'Forrest Gump', 'Schindlers Liste', 'The Dark Knight', 'Chihiros Reise ins Zauberland', 'The Green Mile', 'Das Leben der Anderen', 'Blade Runner', 'Zurück in die Zukunft', 'Jurassic Park'];
// const quizFilm = films[Math.round(Math.random() * 9)];

const books = ['Das Tagebuch der Anne Frank', 'Der Kleine Prinz', 'Das Geisterhaus', 'Der Graf von Monte Christo', 'Der kleine Hobbit', 'Der Glöckner von Notre Dame', 'Gullivers Reisen', 'Der Krieg der Welten', 'Auf der Suche nach der verlorenen Zeit', 'Herr der Fliegen'];
// const quizBooks = books[Math.round(Math.random() * 9)];

const emoji = `¯\\_(:/)_/¯`;

const emojiArr = ['¯', '\\', '_', '(', ':', '/', ')', '_', '/', '¯']

let playAgain = 'j';

let winRounds = 0;
let loseRounds = 0;

const b = chalk.green.bold`b`;
const f = chalk.green.bold`f`;

// functions .........................

const selectTitle = (arr) => {

    const result = arr.map((letter) => {
        if (letter !== ' ') {
            return letter.replace(letter, ' _ ')
        } else {
            // return ' - '
            return '   '
        }
    });
    return result
}






console.clear();

console.log(chalk.cyan.bold`

              。　☆ 。　　☆。　　☆ 
            ★。　＼　　｜　　／。　★`);
console.log(chalk.green.bold`
             Willkommen zu Shrugman `);
console.log(chalk.cyan.bold`
            ★。　／　　｜　　＼。　★ 
              。　☆。 　　。　　☆。    `);

console.log(chalk.magenta.bold`

                   ${emoji}

                        `);
const gamerName = prompt(chalk.green.bold`                Wie heißt du? `)
console.clear();




while (playAgain === 'j') {


    console.log(chalk.cyan.bold`
                                   Hallo ${gamerName}
                                                     `);

    let category = prompt(chalk.cyan.bold`           welche Kategorie möchtest du spielen: Bücher oder Filme (${b} / ${f})? `);                                           
    

    while (category.toLowerCase() !== 'b' && category.toLowerCase() !== 'f') {
        
        console.log(chalk.magenta.bold`           Bitte nur ${b} oder ${f} eingeben `);

        
        category = prompt(chalk.cyan.bold`           welche Kategorie möchtest du spielen: Bücher oder Filme (${b} / ${f})? `);
        // console.clear(); 
    }


    if (category.toLowerCase() === 'b') {
        
        const quizBook = books[Math.round(Math.random() * 9)];
        const quizBookArray = Array.from(quizBook)
        
        console.clear();
        console.log('   ');
        console.log('  ');
        console.log('   ');
        console.log('  ');
        console.log('  ');
        console.log(chalk.cyan.bold`          ${selectTitle(quizBookArray).join('')}`);

        let resultArr = selectTitle(quizBookArray);
        let emojiResultArr = [];
        // const quizBookWithSpace = quizBook.replaceAll(' ', '-').split('').map(char => ` ${char} `);
        const quizBookWithSpace = quizBook.split('').map(char => ` ${char} `);

        while (emojiResultArr.length < 10 && resultArr.join('') !== quizBookWithSpace.join('')) {

            console.log('   ');
            const guessLetter = prompt(chalk.green.bold`          Bitte gib einen Buchstaben ein `);

            function searchLetter(arr, char) {
                let rightChar = false;
                const result = arr.map(letter => {
                    if (char.toLowerCase() === letter.toLowerCase()) {
                        rightChar = true;
                        return ` ${letter} `
                    } else if (letter !== ' ') {
                        return ' _ '
                        // else return '-'
                    } else return ' '

                })
                if (!rightChar) {

                    emojiResultArr.push(emojiArr[emojiResultArr.length]);

                }
                console.log(chalk.magenta.bold`                       ${emojiResultArr.join('')}`);
                console.log('     ');

                for (let i = 0; i < result.length; i++) {
                    if (resultArr[i] !== result[i] && resultArr[i] === ' _ ') {
                        resultArr[i] = result[i]

                    }

                }

                return resultArr;
            }
            console.clear();
            console.log('        ');
            console.log('        ');
            console.log('        ');
            console.log(chalk.cyan.bold`          ${searchLetter(quizBookArray, guessLetter).join('')}`);
            // console.log(searchLetter(quizBookArray, guessLetter).join(''));
            // console.log(quizBookArray.join(''));
        }

        if (resultArr.join('') === quizBookWithSpace.join('')) {
            winRounds++
            console.log(chalk.green.bold`
                。　☆ 。　　☆。　　☆ 
              ★。　＼　　｜　　／。　★`);
            console.log(chalk.magenta.bold`
                 Du hast gewonnen! `);
            console.log(chalk.green.bold`
              ★。　／　　｜　　＼。　★ 
                。　☆。 　　。　　☆。    `);

        } else {
            loseRounds++
            console.log('  ');
            console.log('  ');
            console.log(chalk.green.bold`   ✿ஜீ۞ஜீ✿ (｡•́︿•̀｡) Schade, vielleicht das nächste mal *•.¸¸.•✿ஜீ۞ஜீ✿`);
            console.log('  ');
        }

        console.log('  ');
        const j = chalk.green.bold`j`;
        const n = chalk.green.bold`n`;
        playAgain = prompt(chalk.cyan.bold`           Möchtest du wieder mit mir spielen (${j} / ${n})? `)
        console.log('playAgain', playAgain);

    }


}


console.clear();
console.log('  ');
console.log('  ');
if (winRounds + loseRounds === 1) {
    console.log(chalk.magentaBright.bold`           Von ${winRounds + loseRounds}er Runde hast du ${winRounds} gewonnen`);

} else {
    console.log(chalk.magentaBright.bold`           Von ${winRounds + loseRounds} Runden hast du ${winRounds} gewonnen`);
}

console.log('  ');
console.log(chalk.cyanBright.bold`              (っ◔◡◔)っ Bis bald ${gamerName}!`);
console.log('  ');
console.log('  ');



















