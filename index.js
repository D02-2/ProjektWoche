// Variables........................

const prompt = require('prompt-sync')({ sigint: true });

const chalk = require('chalk');

const films = ['Stars Wars', 'Forrest Gump', 'Schindlers Liste', 'The Dark Knight', 'Chihiros Reise ins Zauberland', 'The Green Mile', 'Das Leben der Anderen', 'Blade Runner', 'Zurück in die Zukunft', 'Jurassic Park'];


const books = ['Das Tagebuch der Anne Frank', 'Der Kleine Prinz', 'Das Geisterhaus', 'Der Graf von Monte Christo', 'Der kleine Hobbit', 'Der Glöckner von Notre Dame', 'Gullivers Reisen', 'Der Krieg der Welten', 'Auf der Suche nach der verlorenen Zeit', 'Herr der Fliegen'];


const emoji = `¯\\_(:/)_/¯`;

const emojiArr = ['¯', '\\', '_', '(', ':', '/', ')', '_', '/', '¯']

let playAgain = 'j';

let winRounds = 0;
let loseRounds = 0;
let gamerName = '';

const b = chalk.green.bold`b`;
const f = chalk.green.bold`f`;

// functions .........................


function welcome() {
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
                      `
    );
    gamerName = prompt(chalk.green.bold`                 Wie heißt du? `);

    console.clear();


};


const selectTitle = (arr) => {

    const result = arr.map((letter) => {
        if (letter !== ' ') {
            return letter.replace(letter, ' _ ')
        } else {

            return '   '
        }
    });
    return result;
}

function chooseCategory() {
    let category = prompt(chalk.cyan.bold`           welche Kategorie möchtest du spielen: Bücher oder Filme (${b} / ${f})? `)


while (category.toLowerCase() !== 'b' && category.toLowerCase() !== 'f') {

    console.log(chalk.magenta.bold`           Bitte nur ${b} oder ${f} eingeben `);
    category = prompt(chalk.cyan.bold`           welche Kategorie möchtest du spielen: Bücher oder Filme (${b} / ${f})? `)

}
return category;
}

function emojiDisplay(arr, guess, emojiGArr) {
    let rightChar = false;
    arr.forEach(letter => {
        if (guess.toLowerCase() === letter.toLowerCase()) {
            rightChar = true;
        }
    })

    if (!rightChar) {

        emojiGArr.push(emojiArr[emojiGArr.length]);

    }
    return emojiGArr;
}

function winLoose(arr1, arr2, quizBook){
    if (arr1.join('') === arr2.join('')) {
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
        console.log(chalk.magentaBright.bold`           Der gesuchte Title lautet: ${quizBook}`);
        console.log('  ');
        console.log(chalk.green.bold`   ✿ஜீ۞ஜீ✿ (｡•́︿•̀｡) Schade, vielleicht das nächste mal *•.¸¸.•✿ஜீ۞ஜீ✿`);
        console.log('  ');
    }
}





/// *************** Spiel Anfang***************

welcome();

while (playAgain === 'j') {

    console.log(chalk.cyan.bold`
                                   Hallo ${gamerName}
                                                     `);   
    
    
    const category = chooseCategory();

    if (category.toLowerCase() === 'b') {

        const quizBook = books[Math.round(Math.random() * books.length - 1)];
        const quizBookArray = Array.from(quizBook);

        console.clear();
        console.log('   ');
        console.log('  ');
        console.log('   ');
        console.log('  ');
        console.log('  ');
        console.log(chalk.cyan.bold`          ${selectTitle(quizBookArray).join('')}`);

        let resultArr = selectTitle(quizBookArray);
        let emojiResultArr = [];
        const quizBookWithSpace = quizBook.split('').map(char => ` ${char} `);

        while (emojiResultArr.length < 10 && resultArr.join('') !== quizBookWithSpace.join('')) {

            console.log('   ');
            const guessLetter = prompt(chalk.green.bold`           Bitte gib einen Buchstaben ein `);

            function searchLetter(arr, char) {
                
                const result = arr.map(letter => {
                    if (char.toLowerCase() === letter.toLowerCase()) {
                       
                        return ` ${letter} `
                    } else if (letter !== ' ') {
                        return ' _ '

                    } else return ' '

                })

                const emojiFunction = emojiDisplay(quizBookArray, guessLetter,  emojiResultArr);
                console.log(chalk.magenta.bold`                       ${emojiFunction.join('')}`);
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

        } 

       const resultRound = winLoose(resultArr, quizBookWithSpace,quizBook)

        console.log('  ');
        const j = chalk.green.bold`j`;
        const n = chalk.green.bold`n`;
        playAgain = prompt(chalk.cyan.bold`           Möchtest du wieder mit mir spielen (${j} / ${n})? `)

        while (playAgain.toLowerCase() !== 'j' && playAgain.toLowerCase() !== 'n') {

            console.log(chalk.magenta.bold`           Bitte nur ${j} oder ${n} eingeben `);
            playAgain = prompt(chalk.cyan.bold`           Möchtest du wieder mit mir spielen (${j} / ${n})? `)
    
        }

        console.clear()
    } else if (category.toLowerCase() === 'f') {

        const quizFilme = films[Math.round(Math.random() * films.length - 1)];
        const quizFilmeArray = Array.from(quizFilme)

        console.clear();
        console.log('   ');
        console.log('  ');
        console.log('   ');
        console.log('  ');
        console.log('  ');
        console.log(chalk.cyan.bold`          ${selectTitle(quizFilmeArray).join('')}`);

        let resultArr1 = selectTitle(quizFilmeArray);
        let emojiResultArr = [];
        const quizFilmeWithSpace = quizFilme.split('').map(char => ` ${char} `);

        while (emojiResultArr.length < 10 && resultArr1.join('') !== quizFilmeWithSpace.join('')) {

            console.log('   ');
            const guessLetter1 = prompt(chalk.green.bold`           Bitte gib einen Buchstaben ein `);

            function searchLetter(arr, char) {
               
                const result = arr.map(letter => {
                    if (char.toLowerCase() === letter.toLowerCase()) {
                      
                        return ` ${letter} `
                    } else if (letter !== ' ') {
                        return ' _ '

                    } else return ' '

                })
             
                const emojiFunction = emojiDisplay(quizFilmeArray, guessLetter1,  emojiResultArr);
                console.log(chalk.magenta.bold`                       ${emojiFunction.join('')}`);
                // console.log(chalk.magenta.bold`                       ${emojiResultArr.join('')}`);
                console.log('     ');

                for (let i = 0; i < result.length; i++) {
                    if (resultArr1[i] !== result[i] && resultArr1[i] === ' _ ') {
                        resultArr1[i] = result[i]

                    }

                }

                return resultArr1;
            }
            console.clear();
            console.log('        ');
            console.log('        ');
            console.log('        ');
            console.log(chalk.cyan.bold`          ${searchLetter(quizFilmeArray, guessLetter1).join('')}`);

        }


        if (resultArr1.join('') === quizFilmeWithSpace.join('')) {
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
            console.log(chalk.magentaBright.bold`           Der gesuchte Title lautet: ${quizFilme}`);
            console.log('  ');
            console.log(chalk.green.bold`   ✿ஜீ۞ஜீ✿ (｡•́︿•̀｡) Schade, vielleicht das nächste mal *•.¸¸.•✿ஜீ۞ஜீ✿`);
            console.log('  ');
        }

        console.log('  ');
        const j = chalk.green.bold`j`;
        const n = chalk.green.bold`n`;
        playAgain = prompt(chalk.cyan.bold`           Möchtest du wieder mit mir spielen (${j} / ${n})? `)
        while (playAgain.toLowerCase() !== 'j' && playAgain.toLowerCase() !== 'n') {

            console.log(chalk.magenta.bold`           Bitte nur ${j} oder ${n} eingeben `);
            playAgain = prompt(chalk.cyan.bold`           Möchtest du wieder mit mir spielen (${j} / ${n})? `)
    
        }
        console.clear()
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



















