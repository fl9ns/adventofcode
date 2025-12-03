const fs = require('fs');
const path = require('path');
const txt = path.join(__dirname,'data.txt');
const data = fs.readFileSync(txt,'utf8');
const lines = data.split('\n');

function partOne() {

    let total = 0;

    lines.forEach( (line) => {
        
        let bigger = {
            number: 0,
            row: -1
        };
        let bigger2 = 0;

        for(let row=0; row<line.length-1; row++) {

            const c1 = Number(line.charAt(row));

            if(c1 > bigger.number) {

                bigger.number = c1;
                bigger.row = row;
            }
        }

        for(let row=bigger.row+1; row<line.length; row++) {

            const c2 = Number(line.charAt(row));

            if(c2 > bigger2) {
                bigger2 = c2;
            }
        }

        total += Number(`${bigger.number}${bigger2}`);

    });

    console.log('Part #1 Total : ', total);

}; partOne();

// return Digit and Row in Data
function getBiggerDigit(data) {

    let res = {
        digit: 0,
        row: -1
    }

    for(let a=0; a<data.length; a++) {

        if(data.charAt(a) > res.digit) {

            res.digit = data.charAt(a);
            res.row = a;
        }
    }

    return res;
}

function partTwo() {

    let total = 0;

    lines.forEach( (line) => {

        let final = '';
        let row = 0;
        let end = -11;

        for(let i=1; i<=12; i++) {

            if(i<12) {
                const res = getBiggerDigit(line.slice(row,end));
                final += res.digit;
                row += res.row+1;
                end++;

            // last digit
            } else {
                const res = getBiggerDigit(line.slice(row));
                final += res.digit;
            }
        }

        total += Number(final);

    });

    console.log('Part #2 Total : ', total);

}; partTwo();
