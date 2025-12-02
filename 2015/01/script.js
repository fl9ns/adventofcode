const fs = require('fs');
const path = require('path');
const txt = path.join(__dirname,'data.txt');
const data = fs.readFileSync(txt,'utf8');

function partOne() {

    let floor = 0;

    for(const char of data) {

        if(char == '(') {
            floor++;
        } else {
            floor--;
        }
    }

    console.log('Part #1 | Final floor: ',floor);

}; partOne();

function partTwo() {

    let floor = 0;

    for(let i=0; i<data.length; i++) {

        if(data[i] == '(') {
            floor++;
        } else {
            floor--;
        }

        if(floor < 0) {
            console.log('Part #2 | Position: ',i+1);
            break;
        }
    }
}; partTwo();
