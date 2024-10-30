let imagemAtual = 'imagem1.png';
let tituloOriginal = 'Meu título';
let paragrafoOriginal = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum esse quidem sunt sit ipsum, similique amet earum! Sint, rerum';
let audio = document.getElementById('audio');

function alterarImagem() {
    const img = document.getElementById('imagem');
    imagemAtual = imagemAtual === 'imagem1.png' ? 'imagem2.png' : 'imagem1.png'; 
    img.src = imagemAtual;
}

document.getElementById('imgbtn').addEventListener('click', alterarImagem);

document.getElementById('titulobtn').addEventListener('click', function () {
    const titulo = document.getElementById('titulo');
    titulo.textContent = titulo.textContent === tituloOriginal ? 'Título2' : tituloOriginal; 
});

document.getElementById('pbtn').addEventListener('click', function () {
    const paragrafo = document.getElementById('paragrafo');
    paragrafo.innerHTML = paragrafo.innerHTML === `<b>${paragrafoOriginal}</b>` ? 'Parágrafo2' : `<b>${paragrafoOriginal}</b>`; // Alterna parágrafo
});

document.getElementById('sombtn').addEventListener('click', function () {
    if (audio.paused) {
        audio.play(); 
    } else {
        audio.pause(); 
        audio.currentTime = 0; 
    }
});

document.getElementById('mudabtn').addEventListener('click', function () {
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');

    if (btn2.textContent === 'Botao3') {
        btn2.textContent = 'btn3';
        btn3.textContent = 'btn2';
    } else {
        btn2.textContent = 'Botao3';
        btn3.textContent = 'Botao2';
    }
});
