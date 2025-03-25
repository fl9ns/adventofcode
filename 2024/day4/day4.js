const fs = require('node:fs')

fs.readFile('./day4.txt', 'utf8', (err, data) => {
    if(!err) {

        let total = 0
        const lines = data.split("\n")


        console.log(`_______________`)
        console.log(`Première partie`+"\n")



        // horizontale
        //
        // XMAS SAMX
        //
        // --------------------
        //
        let totalHorizontal = 0
        lines.forEach(line => {
            const xmas = line.split(`XMAS`).length-1
            if(xmas > 0) {
                totalHorizontal += xmas
                total += xmas
            }
        
            const maxs = line.split(`SAMX`).length-1
            if(maxs > 0) {
                totalHorizontal += maxs
                total += maxs
            }
        })
        console.log(`Horizontale : ${totalHorizontal}`)



        // verticale
        //
        // X    S
        // M    A
        // A    M
        // S    X
        //
        let totalVertical = 0
        // chaque ligne
        for(let l=0; l<lines.length-3; l++) {
            // l     ->   X ou S
            // l+1   ->   M ou A
            // l+2   ->   A ou M
            // l+3   ->   S ou X

            // chaque caractère dans la ligne
            for(let c=0; c<lines[0].length; c++) {

                // sens normal
                if(lines[l].charAt(c) == 'X'
                && lines[l+1].charAt(c) == 'M'
                && lines[l+2].charAt(c) == 'A'
                && lines[l+3].charAt(c) == 'S') {
                    totalVertical++
                    total++
                }

                // sens arrière
                if(lines[l].charAt(c) == 'S'
                && lines[l+1].charAt(c) == 'A'
                && lines[l+2].charAt(c) == 'M'
                && lines[l+3].charAt(c) == 'X') {
                    totalVertical++
                    total++
                }
            }
        }
        console.log(`verticale : ${totalVertical}`)



        // diagonale
        // 
        //    A    |    B    |    C    |    D    |
        //---------+---------+---------+---------+
        //  X      |  S      |      S  |      X  |
        //   M     |   A     |     A   |     M   |
        //    A    |    M    |    M    |    A    |
        //     S   |     X   |   X     |   S     |
        //

        //    A
        let diagonalA = 0
        // chaque ligne
        for(let l=0; l<lines.length-3; l++) {

            // chaque caractère dans la ligne
            for(let c=0; c<lines[0].length-3; c++) {

                if(lines[l].charAt(c) == 'X'
                && lines[l+1].charAt(c+1) == 'M'
                && lines[l+2].charAt(c+2) == 'A'
                && lines[l+3].charAt(c+3) == 'S') {
                    diagonalA++
                    total++
                }
            }
        }
        console.log(`diagonale vers le bas vers la droite : ${diagonalA}`)

        //    B
        let diagonalB = 0
        // chaque ligne
        for(let l=0; l<lines.length-3; l++) {

            // chaque caractère dans la ligne
            for(let c=0; c<lines[0].length-3; c++) {

                if(lines[l].charAt(c) == 'S'
                && lines[l+1].charAt(c+1) == 'A'
                && lines[l+2].charAt(c+2) == 'M'
                && lines[l+3].charAt(c+3) == 'X') {
                    diagonalB++
                    total++
                }
            }
        }
        console.log(`diagonale vers le haut vers la gauche : ${diagonalB}`)

        //    C
        let diagonalC = 0
        // chaque ligne
        for(let l=0; l<lines.length-3; l++) {

            // chaque caractère dans la ligne
            for(let c=3; c<lines[0].length; c++) {

                if(lines[l].charAt(c) == 'S'
                && lines[l+1].charAt(c-1) == 'A'
                && lines[l+2].charAt(c-2) == 'M'
                && lines[l+3].charAt(c-3) == 'X') {
                    diagonalC++
                    total++
                }
            }
        }
        console.log(`diagonale vers le haut vers la droite : ${diagonalC}`)

        //    D
        let diagonalD = 0
        // chaque ligne
        for(let l=0; l<lines.length-3; l++) {

            // chaque caractère dans la ligne
            for(let c=3; c<lines[0].length; c++) {

                if(lines[l].charAt(c) == 'X'
                && lines[l+1].charAt(c-1) == 'M'
                && lines[l+2].charAt(c-2) == 'A'
                && lines[l+3].charAt(c-3) == 'S') {
                    diagonalD++
                    total++
                }
            }
        }
        console.log(`diagonale vers le bas vers la gauche : ${diagonalD}`)



        console.log(`total : ${total}`)



        console.log("\n"+`_______________`)
        console.log(`Deuxième partie`+"\n")



        //              pattern
        // +-------+-------+-------+-------+
        // |   A   |   B   |   C   |   D   |
        // +-------+-------+-------+-------+
        // |  M_S  |  M_M  |  S_S  |  S_M  |
        // |  _A_  |  _A_  |  _A_  |  _A_  |
        // |  M_S  |  S_S  |  M_M  |  S_M  |
        // +-------+-------+-------+-------+
        let totalx = 0

        //    A
        let xA = 0
        // chaque ligne
        for(let l=0; l<lines.length-2; l++) {

            // chaque caractère dans la ligne
            for(let c=0; c<lines[0].length-2; c++) {

                if(lines[l].charAt(c) == 'M'
                && lines[l].charAt(c+2) == 'S'
                && lines[l+1].charAt(c+1) == 'A'
                && lines[l+2].charAt(c) == 'M'
                && lines[l+2].charAt(c+2) == 'S') {
                    xA++
                    totalx++
                }
            }
        }
        console.log(`x-mas premier pattern : ${xA}`)

        //    B
        let xB = 0
        // chaque ligne
        for(let l=0; l<lines.length-2; l++) {

            // chaque caractère dans la ligne
            for(let c=0; c<lines[0].length-2; c++) {

                if(lines[l].charAt(c) == 'M'
                && lines[l].charAt(c+2) == 'M'
                && lines[l+1].charAt(c+1) == 'A'
                && lines[l+2].charAt(c) == 'S'
                && lines[l+2].charAt(c+2) == 'S') {
                    xB++
                    totalx++
                }
            }
        }
        console.log(`x-mas deuxième pattern : ${xB}`)

        //    C
        let xC = 0
        // chaque ligne
        for(let l=0; l<lines.length-2; l++) {

            // chaque caractère dans la ligne
            for(let c=0; c<lines[0].length-2; c++) {

                if(lines[l].charAt(c) == 'S'
                && lines[l].charAt(c+2) == 'S'
                && lines[l+1].charAt(c+1) == 'A'
                && lines[l+2].charAt(c) == 'M'
                && lines[l+2].charAt(c+2) == 'M') {
                    xC++
                    totalx++
                }
            }
        }
        console.log(`x-mas troisième pattern : ${xC}`)

        //    D
        let xD = 0
        // chaque ligne
        for(let l=0; l<lines.length-2; l++) {

            // chaque caractère dans la ligne
            for(let c=0; c<lines[0].length-2; c++) {

                if(lines[l].charAt(c) == 'S'
                && lines[l].charAt(c+2) == 'M'
                && lines[l+1].charAt(c+1) == 'A'
                && lines[l+2].charAt(c) == 'S'
                && lines[l+2].charAt(c+2) == 'M') {
                    xD++
                    totalx++
                }
            }
        }
        console.log(`x-mas quatrième pattern : ${xD}`)

        console.log(`total de x-mas : ${totalx}`)
    }
})
