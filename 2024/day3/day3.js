const fs = require('node:fs')

fs.readFile('./day3.txt', 'utf8', (err, data) => {
    if(!err) {

        console.log(`_______________`)
        console.log(`Première partie`+"\n")

        console.log(`Total : ${parseMul(data)}`)

        console.log("\n"+`_______________`)
        console.log(`Deuxième partie`+"\n")

        // on repère les don´t
        const dontStart = data.split(`don't()`)

        let newTotal = 0

        for(let i=0; i<dontStart.length; i++) {

            // avant le don´t
            if(i===0) {
                newTotal += parseMul(dontStart[0])
            } else {

                // cherche le prochain do
                const doStart = dontStart[i].split(`do()`)
                if(doStart.length > 1) {

                    // si y'a plusieurs do()
                    for(let d=1; d<doStart.length; d++) {
                        newTotal += parseMul(doStart[d])
                    }
                }
            }
        }

        console.log(`Nouveau total : ${newTotal}`)
    }
})

function parseMul(data) {
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
        return total
}
