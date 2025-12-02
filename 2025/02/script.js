const fs = require('fs');
const path = require('path');
const txt = path.join(__dirname,'data.txt');
const data = fs.readFileSync(txt,'utf8');
const lines = data.split(',');

function partOne() {

    let result = 0;

    lines.forEach(line => {
        
        const lineInfo = line.split('-');
        const start = Number(lineInfo[0]);
        const stop = Number(lineInfo[1]);

        for(let n=start; n<=stop; n++) {

            // symetric number
            if(`${n}`.length % 2 == 0) {
                
                const middle = `${n}`.length / 2;

                // bad ID found
                if(`${n}`.slice(0, middle) == `${n}`.slice(middle)) {
                    result += n;
                }
            }
        }

    });

    console.log('Part #1 : ', result);

}; partOne();

function partTwo() {

    let result = 0;
    let badid = [];

    lines.forEach(line => {
        
        const lineInfo = line.split('-');
        const start = Number(lineInfo[0]);
        const stop = Number(lineInfo[1]);

        // number
        for(let n=start; n<=stop; n++) {

            // length target (less middle length number)
            for(let l=1; l<Math.ceil(`${n}`.length); l++) {

                const target = `${n}`.slice(0,l);

                // replace target by blank, empty string -> bad ID
                if(`${n}`.replace(new RegExp(target, 'g'), '') == '') {

                    // check no duplicate number
                    if(!badid.includes(n)) {
                        badid.push(n);
                        result += n;
                    }
                }
            }
        }

    });

    console.log('Part #2 : ', result);
}; partTwo();

