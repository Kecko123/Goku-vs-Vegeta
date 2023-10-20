let HEALTH_GOKU = 100;
let HEALTH_VEGETA = 100;


const MIN_DMG = 5;
const MAX_DMG = 50;

let round = 0;

function punchCalc() {
    return Math.ceil((Math.random() * (MAX_DMG - MIN_DMG) + MIN_DMG));
}



while ((HEALTH_GOKU > 0) && (HEALTH_VEGETA > 0)) {
    let PUNCH_GOKU = punchCalc();
    let PUNCH_VEGETA = punchCalc();

    console.log('-----------------------------------')
    round += 1
    console.log('ROUND ' + round)
    console.log('LA VIDA ACTUAL DE GOKU ES ' + HEALTH_GOKU);
    console.log('LA VIDA ACTUAL DE VEGETA ES ' + HEALTH_VEGETA);

    function roundResult(resultado) {
        switch (resultado) {
            case "empate":
                return PUNCH_GOKU === PUNCH_VEGETA;
                break;
            case "ganagoku":
                return PUNCH_GOKU > PUNCH_VEGETA;
                break;
            case "ganavegeta":
                return PUNCH_GOKU < PUNCH_VEGETA;
                break;
        }
    }

    function realizarDaño(golpeMasFuerte) {
        switch (golpeMasFuerte) {
            case "goku":
                return HEALTH_VEGETA = HEALTH_VEGETA - PUNCH_GOKU;
                break;
            case "vegeta":
                return HEALTH_GOKU = HEALTH_GOKU - PUNCH_VEGETA;
                break;
        }
    }

    function ganador(ganador) {
        switch (ganador) {
            case "vegeta":
                return (HEALTH_VEGETA <= 0);
                break;
            case "goku":
                return (HEALTH_GOKU <= 0);
                break;
        }
    }

    if (roundResult("empate")) {
        console.log('Goku y Vegeta se golpean simultaneamente y no reciben daño!')
        document.write('<div class="container"><img class="Card" src="./media/empate.jpg" width=400><p class="parrafoEmpate">Goku y Vegeta se golpean simultaneamente y no reciben daño!</p></div>')
    } else if (roundResult("ganagoku")) {
        realizarDaño("goku");
        console.log('EL DAÑO DEL GOLPE DE GOKU FUE DE ' + PUNCH_GOKU);
        if (PUNCH_GOKU >= 30) {
            console.log('Goku lanza un Kamehameha a Vegeta');
            document.write('<div class="container"><img class="Card" src="./media/kamehameha.gif" width=400><p class="parrafoGoku">Goku lanza un Kamehameha a Vegeta y le quita mucha vida!</p></div>')
        } else if (PUNCH_GOKU < 30) {
            console.log('Goku golpea a Vegeta!')
            document.write('<div class="container"><img class="Card" src="./media/gokugolpe.gif" width=400><p class="parrafoGoku">Goku golpea a Vegeta quitandole un poco de vida!</p></div>')
        }
    } else if (roundResult("ganavegeta")){
        realizarDaño("vegeta");
        console.log('EL DAÑO DEL GOLPE DE VEGETA FUE DE ' + PUNCH_VEGETA);
        if (PUNCH_VEGETA >= 30) {
            document.write('<div class="container"><img class="Card" src="./media/resplandor_final.gif" width=400><p class="parrafoVegeta">Vegeta lanza un Resplandor Final a Goku quitandole mucha vida!</p></div>')
            console.log('Vegeta lanza un resplandor final quitandole mucha vida a Goku!')
        } else {
            console.log('Vegeta golpea a Goku quitandole un poco de vida!')
            document.write('<div class="container"><img class="Card" src="./media/vegetagolpe.gif" width=400> <p class="parrafoVegeta">Vegeta le da una rafaga de golpes a Goku y le quita un poco de vida!</p></div>')
        }
    }
}


if (HEALTH_GOKU <= 0) {
    console.log('-----------------------------------------------')
    console.log('La vida restante de Goku es ' + HEALTH_GOKU + ' EL GANADOR ES VEGETA!!!!')
    document.write('<div class="container"><img class="Card" src=./media/vegetagana.gif width=400> <p class="parrafoVegeta">Goku se queda sin fuerzas y el ganador es Vegeta!</p></div>')
} else if (HEALTH_VEGETA <= 0) {
    console.log('-----------------------------------------------')
    console.log('La vida restante de Vegeta es ' + HEALTH_VEGETA + ' EL GANADOR ES GOKU!!!!')
    document.write('<div class="container"><img class="Card" src=./media/gokugana.gif width=400> <p class="parrafoGoku">Vegeta se queda sin fuerzas y el ganador es Goku!</p></div>')
}




