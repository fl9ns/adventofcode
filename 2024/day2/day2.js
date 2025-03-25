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



        console.log("\n"+`_______________`)
        console.log(`Deuxième partie`+"\n")

        let safe2 = 0

        lines.forEach(line => {

            const numbers = line.split(' ').map(Number)

            let safeStrict = false
            // un doublon = non sûr
            // -> si deux doublons se suivent = non sûr
            // -> si deux doublons ne se suivent pas, c'est une augmentation et diminution = non sûr
            if(checkDuplicate(numbers) === false) {

                // en hausse ou en baisse, mais sans fluctuation.
                if(checkIncrease(numbers) === true || checkDecrease(numbers) === true ) {

                    // pas d'écart de plus de 3
                    if(checkDiffer3(numbers) === true) {

                        // déjà sûr
                        safe2++
                        safeStrict = true
                    }
                }
            }

            // on vérifie ceux qui ne sont pas sûr
            // avec la nouvelle règle 
            if(safeStrict === false) {

                // on enlève un nombre dans le tableau et on retest
                // autant de fois qu'il y a de nombre dans la ligne
                for(let i=0; i<numbers.length; i++) {
                    
                    let newNumbers = numbers.slice()
                    newNumbers.splice(i, 1)

                    // un doublon = non sûr
                    // -> si deux doublons se suivent = non sûr
                    // -> si deux doublons ne se suivent pas, c'est une augmentation et diminution = non sûr
                    if(checkDuplicate(newNumbers) === false) {

                        // en hausse ou en baisse, mais sans fluctuation.
                        if(checkIncrease(newNumbers) === true || checkDecrease(newNumbers) === true ) {

                            // pas d'écart de plus de 3
                            if(checkDiffer3(newNumbers) === true) {

                                // devient sûr avec un nombre en moins
                                safe2++
                                break
                            }
                        }
                    }
                }
            }
        })

        console.log(`il y a ${safe2} lignes sûres avec la nouvelle règle.`)
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

