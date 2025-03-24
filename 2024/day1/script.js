const fs = require('node:fs')

fs.readFile('./day1.txt', 'utf8', (err, data) => {
    if(!err) {
        
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
    }
})
