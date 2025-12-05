const fs = require('fs');
const path = require('path');
const input = path.join(__dirname,'input');
const data = fs.readFileSync(input,'utf8');
const lines = data.split('\n');

function partOne() {

    let rolls = 0;

    for(let l=0; l<lines.length; l++) {

        for(let c=0; c<lines[l].length; c++) {

            if(lines[l][c] == '@') {

                let heightPos = 0;

                // previous line
                if(l-1 >= 0) {
                    // previous pos char
                    if(c-1 >= 0) {
                        if(lines[l-1][c-1] == '@') heightPos++;
                    }
                    // same pos char
                    if(lines[l-1][c] == '@') heightPos++;
                    // next pos char
                    if(c+1 < lines[l-1].length) {
                        if(lines[l-1][c+1] == '@') heightPos++;
                    }
                }

                // previous pos char
                if(c-1 >= 0) {
                    if(lines[l][c-1] == '@') heightPos++;
                }
                // next pos char
                if(c+1 < lines[l].length) {
                    if(lines[l][c+1] == '@') heightPos++;
                }

                // next line
                if(l+1 < lines.length) {
                    // previous pos char
                    if(c-1 >= 0) {
                        if(lines[l+1][c-1] == '@') heightPos++;
                    }
                    // same pos char
                    if(lines[l+1][c] == '@') heightPos++;
                    // next pos char
                    if(c+1 < lines[l+1].length) {
                        if(lines[l+1][c+1] == '@') heightPos++;
                    }
                }

                // be accessed
                if(heightPos < 4) rolls++;
            }
        }
    }

    // RESULT
    console.log('Part #1:', rolls, 'rolls of paper can be accessed by a forklift.');

}; partOne();


function partTwo() {1

    let rolls = 0;
    let lastRolls = -1;
    let lines1 = Array.from(lines);
    let lines2 = Array.from(lines);


    while(lastRolls != rolls) {

        lastRolls = rolls;

        for(let l=0; l<lines1.length; l++) {

            for(let c=0; c<lines1[l].length; c++) {

                if(lines1[l][c] == '@') {

                    let heightPos = 0;

                    // previous line
                    if(l-1 >= 0) {
                        // previous pos char
                        if(c-1 >= 0) {
                            if(lines1[l-1][c-1] == '@') heightPos++;
                        }
                        // same pos char
                        if(lines1[l-1][c] == '@') heightPos++;
                        // next pos char
                        if(c+1 < lines1[l-1].length) {
                            if(lines1[l-1][c+1] == '@') heightPos++;
                        }
                    }

                    // previous pos char
                    if(c-1 >= 0) {
                        if(lines1[l][c-1] == '@') heightPos++;
                    }
                    // next pos char
                    if(c+1 < lines1[l].length) {
                        if(lines1[l][c+1] == '@') heightPos++;
                    }

                    // next line
                    if(l+1 < lines1.length) {
                        // previous pos char
                        if(c-1 >= 0) {
                            if(lines1[l+1][c-1] == '@') heightPos++;
                        }
                        // same pos char
                        if(lines1[l+1][c] == '@') heightPos++;
                        // next pos char
                        if(c+1 < lines1[l+1].length) {
                            if(lines1[l+1][c+1] == '@') heightPos++;
                        }
                    }

                    // be accessed
                    if(heightPos < 4) {
                        rolls++;
                        lines2[l] = lines2[l].slice(0, c) + 'x' + lines2[l].slice(c + 1);
                    }
                }
            }
        }

        lines1 = Array.from(lines2);
    }

    // RESULT
    console.log('Part #2:', rolls, 'rolls of paper in total can be removed by the Elves and their forklifts.');
    

}; partTwo();


