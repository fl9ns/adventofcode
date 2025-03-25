const fs = require('node:fs')

fs.readFile('./day3.txt', 'utf8', (err, data) => {
    if(!err) {

        const mulStart = data.split(`mul(`)

        let total = 0

        for(let i=1; i<mulStart.length; i++) {
            const mulLine = mulStart[i].split(')')[0]
            const mulNumber = mulLine.split(',')

            // recherche un pattern tel que
            // ['...','...']
            if(mulNumber.length === 2) {

                // vérifie si c'est deux entiers
                if(parseInt(mulNumber[0]).toString() === mulNumber[0]
                && parseInt(mulNumber[1]).toString() === mulNumber[1]) {
                    total += parseInt(mulNumber[0])*parseInt(mulNumber[1])
                }
            }
        }

        console.log(`Total : ${total}`)
    }
})
