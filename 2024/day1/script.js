const fs = require('node:fs')

fs.readFile('./day1.txt', 'utf8', (err, data) => {
    if(!err) {

        console.log(`_______________`)
        console.log(`Première partie`+"\n")

        const lines = data.split("\n")
        let numberLeft = []
        let numberRight = []
        lines.forEach(line => {
            const l = line.split('   ')
            numberLeft.push(parseInt(l[0]))
            numberRight.push(parseInt(l[1]))
        })
        numberLeft.sort()
        numberRight.sort()
        console.log(`${lines.length} lignes traitées.`)

        let total = 0
        for(let i=0; i<lines.length; i++) {
            total += Math.abs(numberLeft[i] - numberRight[i])
        }
        console.log(`Distance totale : ${total}`)



        console.log("\n"+`_______________`)
        console.log(`Deuxième partie`+"\n")

        let score = 0
        for(let i=0; i<lines.length; i++) {
            const numberFound = numberRight.filter((n) => n === numberLeft[i]).length
            score += numberLeft[i]*numberFound
        }
        console.log(`Score de similarité : ${score}`)
    }
})
