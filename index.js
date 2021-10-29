// Variables........................

const prompt = require('prompt-sync')({ sigint: true });

const chalk = require('chalk');

const films = ['Star Wars', 'Forrest Gump', 'Schindlers Liste', 'The Dark Knight', 'Chihiros Reise ins Zauberland', 'The Green Mile', 'Das Leben der Anderen', 'Blade Runner', 'Zurück in die Zukunft', 'Jurassic Park'];


const books = ['Das Tagebuch der Anne Frank', 'Der Kleine Prinz', 'Das Geisterhaus', 'Der Graf von Monte Christo', 'Der kleine Hobbit', 'Der Glöckner von Notre Dame', 'Gullivers Reisen', 'Der Krieg der Welten', 'Auf der Suche nach der verlorenen Zeit', 'Herr der Fliegen'];


const emoji = `¯\\_(:/)_/¯`;

const emojiArr = ['¯', '\\', '_', '(', ':', '/', ')', '_', '/', '¯'];

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
                         .        
                  。　☆ 。　. ☆。　* 
                *。　＼　　｜　　／。　★`);
    console.log(chalk.green`
             Willkommen zu  S H R U G M A N`);

    console.log(chalk.cyan.bold`
                ★。　／　　｜　　＼。. ★ 
                  。　*。 ✵　。✦　☆。*    
                       ☆   .     *           `);

    console.log('  ');
    console.log(chalk.magenta.bold` 
                      ${emoji} 
                      `
    );
    gamerName = prompt(chalk.green.bold`                    Wie heißt du? `);

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

function emojiDisplay(arr, guess, emojiGArr, noLetter) {
    let rightChar = false;

    arr.forEach(letter => {
        if (guess.toLowerCase() === letter.toLowerCase()) {
            rightChar = true;
        }
    })

    if (!rightChar) {

        emojiGArr.push(emojiArr[emojiGArr.length]);
        noLetter.push(guess);
    }
    return { 'r1': emojiGArr, 'r2': noLetter };
}

function winLoose(arr1, arr2, quizItem) {
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
        console.log('  ');

    } else {
        loseRounds++
        console.log('  ');
        console.log(chalk.magentaBright.bold`           Der gesuchte Title lautet: ${quizItem}`);
        console.log('  ');
        console.log(chalk.green.bold`           (｡•́︿•̀｡) Schade, vielleicht das nächste mal.¸¸.•✿ஜீ۞ஜீ✿`);
        console.log('  ');
        console.log('  ');
    }
}

function gameRepeat() {
    console.log('  ');
    const j = chalk.green.bold`j`;
    const n = chalk.green.bold`n`;
    let playAgain = prompt(chalk.cyan.bold`           Möchtest du wieder mit mir spielen (${j} / ${n})? `)

    while (playAgain.toLowerCase() !== 'j' && playAgain.toLowerCase() !== 'n') {

        console.log(chalk.magenta.bold`           Bitte nur ${j} oder ${n} eingeben `);
        playAgain = prompt(chalk.cyan.bold`           Möchtest du wieder mit mir spielen (${j} / ${n})? `)

    }

    console.clear()
    return playAgain
}

function searchLetter(quizBookArray, guessLetter, emojiResultArr, noLetter) {

    const result = quizBookArray.map(letter => {
        if (guessLetter.toLowerCase() === letter.toLowerCase()) {

            return ` ${letter} `
        } else if (letter !== ' ') {
            return ' _ '

        } else return ' '

    })

    console.log('   ');
    const emojiFunction = emojiDisplay(quizBookArray, guessLetter, emojiResultArr, noLetter);

    console.log(`                     `, chalk.green.bold`${emojiFunction.r1.join('')}`);
    // console.log(`          `, chalk.green.bold`${emojiFunction.r1.join('')}      `, chalk.magenta.italic`Fehlversuche: ${emojiFunction.r2.join(' ')}`);
    console.log('   ');
    console.log(chalk.magenta.italic`           Fehlversuche: ${emojiFunction.r2.join(' ')}`);

    return result;
}

function gameOver() {
    console.clear();
    console.log('  ');
    console.log('  ');
    console.log('  ');
    if (winRounds + loseRounds === 1) {
        console.log(chalk.magentaBright.bold`                 Von ${winRounds + loseRounds}er Runde hast du ${winRounds} gewonnen`);

    } else {
        console.log(chalk.magentaBright.bold`                 Von ${winRounds + loseRounds} Runden hast du ${winRounds} gewonnen`);
    }
    
   
    console.log(chalk.green.bold`   
    
                   ★ ° . *　　　°　.　°☆ 　. * ● ¸ 
               . 　　　★ 　° :. ★　 * • ○ ° ★　 
               .　 * 　.　 　　　　　. 　 
               ° 　. ● . ★ ° .`, chalk.cyanBright.bold` (っ◔◡◔)っ Bis bald ${gamerName}!`,chalk.green.bold`. * ● ¸ .  * 
              ★ ° • ○ ° ★　 .　 * 　.　 　　　　　.
               　 ° 　. ● . ★ ° . *　　　°　.　
                °☆ 　. * ● ¸ . 　　　★ 　
                   ° :. 　 * • ○ ° ★　
    `)
    console.log('  ');
    console.log('  ');

}



/// *************** Spiel Anfang***************

welcome();

while (playAgain === 'j') {
    console.log('  ');
    console.log(chalk.cyan.bold`
                                   Hallo ${gamerName}
                                                     `);


    const category = chooseCategory();


    if (category.toLowerCase() === 'b') {

        const quizBook = books[Math.round(Math.random() * 9)];
        const quizBookArray = Array.from(quizBook);

        console.clear();
        console.log('   ');
        console.log('   ');
        console.log('  ');
        console.log('   ');
        console.log('  ');
        console.log('  ');
        console.log(chalk.cyan.bold`          ${selectTitle(quizBookArray).join('')}`);

        let resultArr = selectTitle(quizBookArray);
        let emojiResultArr = [];
        const quizBookWithSpace = quizBook.split('').map(char => ` ${char} `);
        let noLetter = [];
        while (emojiResultArr.length < 10 && resultArr.join('') !== quizBookWithSpace.join('')) {

            console.log('   ');
            const guessLetter = prompt(chalk.green.bold`           Bitte gib einen Buchstaben ein `);

            console.clear();
            const result = searchLetter(quizBookArray, guessLetter, emojiResultArr, noLetter)
            for (let i = 0; i < result.length; i++) {
                if (resultArr[i] !== result[i] && resultArr[i] === ' _ ') {
                    resultArr[i] = result[i]

                }

            }

            console.log('   ');
            console.log('   ');
            console.log('        ');
            console.log('        ');
            console.log(chalk.cyan.bold`          ${resultArr.join('')}`);

        }

        const resultRound = winLoose(resultArr, quizBookWithSpace, quizBook);

        playAgain = gameRepeat();

    } else {

        const quizFilme = films[Math.round(Math.random() * 9)];
        const quizFilmeArray = Array.from(quizFilme);

        console.clear();
        console.log('   ');

        console.log('   ');
        console.log('  ');
        console.log('   ');
        console.log('  ');
        console.log('  ');
        console.log(chalk.cyan.bold`          ${selectTitle(quizFilmeArray).join('')}`);

        let resultArr1 = selectTitle(quizFilmeArray);
        let emojiResultArr = [];
        let noLetter = [];
        const quizFilmeWithSpace = quizFilme.split('').map(char => ` ${char} `);

        while (emojiResultArr.length < 10 && resultArr1.join('') !== quizFilmeWithSpace.join('')) {

            console.log('   ');
            const guessLetter1 = prompt(chalk.green.bold`           Bitte gib einen Buchstaben ein `);

            console.clear();
            const result = searchLetter(quizFilmeArray, guessLetter1, emojiResultArr, noLetter)
            for (let i = 0; i < result.length; i++) {
                if (resultArr1[i] !== result[i] && resultArr1[i] === ' _ ') {
                    resultArr1[i] = result[i]

                }

            }

            console.log('   ');
            console.log('   ');
            console.log('        ');
            console.log('        ');
            console.log(chalk.cyan.bold`          ${resultArr1.join('')}`);

        }


        const resultRound = winLoose(resultArr1, quizFilmeWithSpace, quizFilme);
        playAgain = gameRepeat();

    }


}


gameOver();





















