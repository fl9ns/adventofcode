const fs = require('node:fs')

fs.readFile('./day6.txt', 'utf8', (err, data) => {
    if(!err) {

        // position du garde (inconnu au début)
        let location = {line: -1, row: -1, limit: {top: 0, right:-1, bottom: -1, left: 0}}

        // stock les données dans une matrice
        // et récupération de la position du garde
        let matrice = []
        const lines = data.split("\n")
        for(let line=0; line<lines.length; line++) {
            const chars = lines[line].split('')
            for(let index=0; index<chars.length; index++) {
                if(chars[index] === '^') {
                    location.line = line
                    location.row = index
                    break
                }
            }
            matrice.push(chars)
        }

        // mise à jour des limites de la matrice
        location.limit.right = matrice[0].length-1
        location.limit.bottom = matrice.length-1

        console.log(`Le garde commence à la position [${location.line+1},${location.row+1}]`)

        // on lance la simulation
        walk(location, matrice)

        // Nombre de position distinct
        const totalDistinctPosition = countDistinctPosition(matrice)
        console.log(`Le garde à marché sur ${totalDistinctPosition} positions distincts.`)
        
    }
})

function walk(location, matrice) {
    let walking = true
    while(walking === true) {
        walking = walkTop(location, matrice)
        if(walking === true) {
            walking = walkRight(location, matrice)
            if(walking === true) {
                walking = walkBottom(location, matrice)
                if(walking === true) {
                    walking = walkLeft(location, matrice)
                }
            }
        }
    }
}
function walkTop(location, matrice) {
    while(location.line > 0 && matrice[location.line-1][location.row] !== '#') {
        matrice[location.line][location.row] = 'X'
        location.line--
        matrice[location.line][location.row] = '^'
    }
    // Ce n'est pas encore la sortie
    if(location.line > 0) {
        matrice[location.line][location.row] = '>'
        return true

    // C'est la sortie, on marque la position quand même
    } else {
        matrice[location.line][location.row] = 'X'
        console.log(`Le garde vient de trouver la sortie [${location.line+1},${location.row+1}]`)
        return false
    }
}
function walkRight(location, matrice) {
    while(location.row < location.limit.right && matrice[location.line][location.row+1] !== '#') {
        matrice[location.line][location.row] = 'X'
        location.row++
        matrice[location.line][location.row] = '>'
    }
    // Ce n'est pas encore la sortie
    if(location.row < location.limit.right) {

        matrice[location.line][location.row] = 'v'
        return true

    // C'est la sortie, on marque la position quand même
    } else {
        matrice[location.line][location.row] = 'X'
        console.log(`Le garde vient de trouver la sortie [${location.line+1},${location.row+1}]`)
        return false
    }
    
}
function walkBottom(location, matrice) {
    while(location.line < location.limit.bottom && matrice[location.line+1][location.row] !== '#') {
        matrice[location.line][location.row] = 'X'
        location.line++
        matrice[location.line][location.row] = 'v'
    }
    // Ce n'est pas encore la sortie
    if(location.line < location.limit.bottom) {

        matrice[location.line][location.row] = '<'
        return true

    // C'est la sortie, on marque la position quand même
    } else {
        matrice[location.line][location.row] = 'X'
        console.log(`Le garde vient de trouver la sortie [${location.line+1},${location.row+1}]`)
        return false
    }
    
}
function walkLeft(location, matrice) {
    while(location.row > 0 && matrice[location.line][location.row-1] !== '#') {
        matrice[location.line][location.row] = 'X'
        location.row--
        matrice[location.line][location.row] = '<'
    }
    // Ce n'est pas encore la sortie
    if(location.row > 0) {

        matrice[location.line][location.row] = '^'
        return true

    // C'est la sortie, on marque la position quand même
    } else {
        matrice[location.line][location.row] = 'X'
        console.log(`Le garde vient de trouver la sortie [${location.line+1},${location.row+1}]`)
        return false
    }
    
}
function countDistinctPosition(matrice) {
    return matrice.reduce((total, row) => {
        return total + row.filter(x => x === 'X').length
      }, 0)

}
