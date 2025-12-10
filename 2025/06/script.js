const fs = require('fs');
const path = require('path');
const input = path.join(__dirname,'input');
const data = fs.readFileSync(input,'utf8');
const lines = data.split('\n');

function partOne() {

    let lastIndexspaceColumn = 0;
    let total = 0;

    // parse horizontal
    for(let row=0; row<lines[0].length; row++) {

        let spaceColumn = 0;

        // search separator (full column of only spaces)
        for(let line=0; line<lines.length; line++) {

            if(lines[line][row] == ' ') {

                spaceColumn++;
            }
        }

        // separator found or end
        if(spaceColumn == lines.length || row == lines[0].length - 1) {

            const start = lastIndexspaceColumn;
            const end = row + 1;
            lastIndexspaceColumn = row;

            const operator = lines[lines.length - 1].slice(start, end);

            let res = 0;
            for(let line=0; line<lines.length - 1; line++) {
                const number = Number(lines[line].slice(start, end));
                if(line == 0) {
                    res = number;
                } else {
                    switch(operator.replaceAll(' ','')) {
                        case '+':
                            res += number;
                            break;
                        case '*' :
                            res *= number;
                            break;
                    }
                }
            }
            total += res;
        }
    }

    console.log('Part #1:', total, 'is the grand total found by adding together all of the answers to the individual problems');

}; partOne();
