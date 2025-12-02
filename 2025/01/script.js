const fs = require('fs');
const path = require('path');
const txt = path.join(__dirname,'data.txt');
const data = fs.readFileSync(txt,'utf8');
const lines = data.split('\n');

function partOne() {

    let pos = 50;
    let pass = 0;

    lines.forEach( (line) => {

        if(line.length > 0) {

            const num = Number(line.slice(1));
            
            // minus
            if(line.charAt(0) == 'L') {

                // new pos
                pos = (pos - num + 100) % 100;

            // plus
            } else {
                
                // new pos
                pos = (pos + num) % 100;
                
            }

            if(pos == 0) { pass++ }
        }
    });

    console.log('--------------------------------');
    console.log('Part #1');
    console.log(`Password is : ${pass}`);

}; partOne();

function partTwo() {

    let pos = 50;
    let pass = 0;

    lines.forEach( (line) => {

        if(line.length > 0) {

            const left = (line.charAt(0) == 'L');

            const num = Number(line.slice(1));

            // check every moove
            for(let n=1; n<=num; n++) {
                
                if(left) {
                    pos--;
                    if(pos < 0) { pos = 99 }
                } else {
                    pos++;
                    if(pos > 99) { pos = 0 }
                }

                if(pos == 0) { pass++ }

            }
        }
    });

    console.log('--------------------------------');
    console.log('Part #2');
    console.log(`Password is : ${pass}`);
    
}; partTwo();
