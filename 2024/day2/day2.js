const fs = require('node:fs')

fs.readFile('./day2.txt', 'utf8', (err, data) => {
    if(!err) {

        console.log(`_______________`)
        console.log(`Première partie`+"\n")

        const lines = data.split("\n")
        
        let duplicate = 0
        let indecrease = 0
        let differ = 0
        let safe = 0

        lines.forEach(line => {
            const numbers = line.split(' ').map(Number)

            // un doublon = non sûr
            // -> si deux doublons se suivent = non sûr
            // -> si deux doublons ne se suivent pas, c'est une augmentation et diminution = non sûr
            if(checkDuplicate(numbers) === false) {

                // en hausse ou en baisse, mais sans fluctuation.
                if(checkIncrease(numbers) === true || checkDecrease(numbers) === true ) {

                    // pas d'écart de plus de 3
                    if(checkDiffer3(numbers) === true) {

                        safe++

                    } else { differ++  }
                } else { indecrease++ }
            } else { duplicate++ }
        })

        console.log(`${duplicate} lignes trouvées avec des doublons.`)
        console.log(`${indecrease} lignes trouvées avec des augmentations et diminutions.`)
        console.log(`${differ} lignes trouvées avec des différences trop importantes.`)
        console.log(`il reste ${safe} lignes sûres.`)
    }
})



function checkDuplicate(numbers) {
    if(numbers.filter((num, index) => numbers.indexOf(num) !== index).length === 0) {
        return false
    }
    return true
}
function checkIncrease(numbers) {
    for(let i=1; i<numbers.length; i++) {
        if(numbers[i] < numbers[i-1]) {
            return false
        }
    }
    return true
}
function checkDecrease(numbers) {
    for(let i=1; i<numbers.length; i++) {
        if(numbers[i] > numbers[i-1]) {
            return false
        }
    }
    return true
}
function checkDiffer3(numbers) {
    for(let i=1; i<numbers.length; i++) {
        if(Math.abs(numbers[i] - numbers[i-1]) > 3) {
            return false
        }
    }
    return true
}

