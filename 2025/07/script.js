const fs = require('fs');
const path = require('path');
const input = path.join(__dirname,'input');
const data = fs.readFileSync(input,'utf8');
const lines = data.split('\n');


function partOne() {
    let beam = [lines[0].indexOf('S')];
    let split = 0;

    // parse lines
    for(let line=1; line<lines.length; line++) {

        // parse chars
        for(let row=0; row<lines[line].length; row++) {

            // Split found
            if(lines[line][row] == '^' && beam.includes(row)) {
                split++;
            }

            // Update beam
            if(lines[line][row] == '^') {

                // remove current beam
                const i = beam.indexOf(row);
                if(i !== -1) {
                    beam.splice(i, 1);
                }

                // add left and right new beam
                const left = row - 1;
                if(!beam.includes(left)) {
                    beam.push(left);
                }
                const right = row + 1;
                if(!beam.includes(right)) {
                    beam.push(right);
                }
            }
        }
    }
    console.log(split, 'times will the beam be split');
    
}; partOne();
