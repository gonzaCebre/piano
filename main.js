const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']; //Creas un array para las teclas a ser pulsadas
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.key'); //Seleccionas todas las teclas
const whiteKeys = document.querySelectorAll('.key.white'); //Seleccionas las teclas blancas
const blackKeys = document.querySelectorAll('.key.black'); //Seleccionas las teclas negras

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
});

document.addEventListener('keydown', (e) => { //Cuando se presiones una tecla del teclado
    if (e.repeat) return; //Si el evento se repite, no retornar nada

    const key = e.key; //Guarda la tecla presionada
    const whiteKeyIndex = WHITE_KEYS.indexOf(key); //Guarda el index de la tecla presionada en el array
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1) {
        playNote(whiteKeys[whiteKeyIndex]);
    }
    if (blackKeyIndex > -1) {
        playNote(blackKeys[blackKeyIndex]);
    }
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0; //Esto permite que la nota deje de sonar si se vuelve a tocar, en vez de superponerse
    noteAudio.play(); //inicializa el audio
    key.classList.add('active'); //Agrega la clase 
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active'); //Cuando se acaba el sonido, se remueve la clase
    })
}