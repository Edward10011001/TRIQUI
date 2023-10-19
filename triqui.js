let turno = 'X';
let tablero = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function hacerMovimiento(casilla) {
    if (!gameOver && casilla.innerHTML === '') {
        casilla.innerHTML = turno;
        tablero[casilla.dataset.index] = turno;
        if (verificarGanador(turno)) {
            document.getElementById('resultado').innerHTML = `¡Ganó ${turno}!`;
            gameOver = true;
        } else if (tableroCompleto()) {
            document.getElementById('resultado').innerHTML = 'El juego terminó en empate.';
            gameOver = true;
        } else {
            turno = turno === 'X' ? 'O' : 'X';
        }
    }
}

function verificarGanador(jugador) {
    const lineasGanadoras = [let turno = "X";
    let tablero = ['', '', '', '', '', '', '', '', ''];
    let gameOver = false;
    
    function hacerMovimiento(casilla) {
        if (!gameOver && casilla.innerHTML === '') {
            casilla.innerHTML = turno;
            tablero[casilla.dataset.index] = turno;
            if (verificarGanador(turno)) {
                document.getElementById('mensaje').innerHTML = `¡Ganó ${turno}!`;
                gameOver = true;
            } else if (tableroCompleto()) {
                document.getElementById('mensaje').innerHTML = 'El juego terminó en empate.';
                gameOver = true;
            } else {
                turno = turno === 'X' ? 'O' : 'X';
            }
        }
    }
    
    function verificarGanador(jugador) {
        const lineasGanadoras = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
    
        for (const linea of lineasGanadoras) {
            const [a, b, c] = linea;
            if (tablero[a] === jugador && tablero[b] === jugador && tablero[c] === jugador) {
                return true;
            }
        }
    
        return false;
    }
    
    function tableroCompleto() {
        return tablero.every(casilla => casilla !== '');
    }
    
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const linea of lineasGanadoras) {
        const [a, b, c] = linea;
        if (tablero[a] === jugador && tablero[b] === jugador && tablero[c] === jugador) {
            return true;
        }
    }

    return false;
}

function tableroCompleto() {
    return tablero.every(casilla => casilla !== '');
}
´//´me dice que puedo comentar sind añar codigo 
