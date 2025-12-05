const fs = require('fs');
const path = require('path');
const input = path.join(__dirname,'input');
const data = fs.readFileSync(input,'utf8');
const lines = data.split('\n');

function partOne() {

    let fresh = [];
    let ingredient = [];

    lines.forEach( (line) => {

        if(line.length > 0) {

            if(line.indexOf('-') > -1) {

                fresh.push(line);

            } else {

                ingredient.push(line);
            }
        }
    });

    // min-max fresh
    let freshMinMax = [];
    for(let f=0; f<fresh.length; f++) {
        const range = fresh[f].split('-');
        const min = Number(range[0]);
        const max = Number(range[1]);
        freshMinMax.push({min: min,max: max});
    }

    let available = 0;
    ingredient.forEach( (ing) => {

        for(let i=0; i<freshMinMax.length; i++) {

            const id = Number(ing);
            if(id >= freshMinMax[i].min && id <= freshMinMax[i].max) {
                available++;
                break;
            }
        }
    });

    console.log('Part #1:', available, 'ingredient IDs are fresh.');
}; partOne();

function partTwo() {

    // save all interval
    let ranges = [];
    lines.forEach( (line) => {
        if(line.length > 0) {
            if(line.indexOf('-') > -1) {

                const range = line.split('-');
                const min = Number(range[0]);
                const max = Number(range[1]);

                ranges.push({ min: min, max: max });
            }
        }
    });

    // sort for easy merge
    ranges.sort( (a, b) => {
        if(a.min > b.min) {
            return 1;
        } else {
            return -1;
        }
    });

    // merge all interval
    const merged = [];
    ranges.forEach( (range) => {

        const min = range.min;
        const max = range.max;

        // firt interval
        if (merged.length == 0) {

            merged.push({ min: min, max: max });

        } else {

            const last = merged[merged.length - 1];

            // fusion with last interval
            if (min <= last.max) {

                if(last.max <= max ) {

                    last.max = max;
                }
            
            // an other interval
            } else {

                merged.push({ min: min, max: max });
            }
        }
    });

    // calcul
    let total = 0;
    merged.forEach( (number) => {
        total += number.max - number.min + 1; // +1 -> min and max are inclusive
    });

    console.log('Part #2:', total, 'ingredient IDs are considered to be fresh.');

}; partTwo();
