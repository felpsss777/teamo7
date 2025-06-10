<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Planos pra Mell</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background: url("fundo.jpg.png") no-repeat center center fixed;
      background-size: cover;
      color: white;
      position: relative;
      height: 100vh;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .hearts-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
      z-index: 1;
    }

    .heart {
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: #ff4dc4;
      transform: rotate(45deg);
      animation: floatUp 4s linear forwards;
      opacity: 0.8;
    }

    .heart::before,
    .heart::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: #ff4dc4;
      border-radius: 50%;
    }

    .heart::before {
      top: -10px;
      left: 0;
    }

    .heart::after {
      top: 0;
      left: -10px;
    }

    @keyframes floatUp {
      0% {
        transform: translateY(0) rotate(45deg);
        opacity: 0.9;
      }
      100% {
        transform: translateY(-100vh) rotate(45deg);
        opacity: 0;
      }
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(31,31,31,0.8), rgba(75,43,99,0.8));
      z-index: 0;
    }

    .container {
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 600px;
      padding: 20px;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 20px;
      box-shadow: 0 0 20px #c084fc;
      animation: fadeIn 2s ease-in;
    }

    img {
      width: 180px;
      height: 180px;
      object-fit: cover;
      border-radius: 50%;
      border: 4px solid #e879f9;
      margin-bottom: 15px;
    }

    h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
      color: #e879f9;
    }

    p {
      font-size: 1.2em;
      line-height: 1.6;
      margin: 15px 0;
      transition: opacity 0.5s ease-in-out;
    }

    button {
      margin: 10px 8px;
      padding: 12px 25px;
      font-size: 1em;
      border: none;
      border-radius: 25px;
      background-color: #9333ea;
      color: white;
      cursor: pointer;
      transition: background 0.3s;
    }

    button:hover {
      background-color: #7e22ce;
    }

    #botaoSecreto {
      display: none;
      margin-top: 15px;
      background-color: #e91e63;
    }

    #botaoSecreto:hover {
      background-color: #ad1457;
    }

    @keyframes fadeIn {
      from {opacity: 0;}
      to {opacity: 1;}
    }
  </style>
</head>
<body>
  <div class="hearts-container"></div>
  <div class="overlay"></div>

  <div class="container">
    <img src="mell.jpg" alt="Foto da Mell">
    <h1>Planos pra nós dois, Mell</h1>
    <p id="texto">“Se o mundo é nosso, então vamo viver o nosso plano.”</p>
    <button id="btnFrases" onclick="mostrarMensagem()">Clique pra ver mais</button>
    <button onclick="alternarMusica()">Tocar / Pausar música</button>
    <button id="botaoSecreto" onclick="abrirLinkSecreto()">Surpresa! ❤️</button>
  </div>

  <script>
    const frases = [
      "Meu plano é simples: eu, você e a liberdade.",
      "Com você, até o caos tem ritmo.",
      "Nada me tira do foco, só o teu sorriso.",
      "Eu sou rua, mas contigo viro lar.",
      "É por você que eu rimo, Mell.",
      "Se BK fez planos, eu faço promessas.",
      "Obrigado por existir.",
      "Feliz dia dos namorados.",
      "Eu te amo, Neguinha.",
      "Espero que goste.",
      "Com você estou completo."
    ];

    let index = 0;
    let contadorCliques = 0;

    function mostrarMensagem() {
      const texto = document.getElementById("texto");
      texto.style.opacity = 0;
      setTimeout(() => {
        texto.textContent = frases[index];
        texto.style.opacity = 1;
        index = (index + 1) % frases.length;
      }, 300);

      contadorCliques++;
      if (contadorCliques === 7) { // depois de 7 cliques aparece o botão secreto
        document.getElementById("botaoSecreto").style.display = "inline-block";
      }
    }

    const audio = new Audio("bk-planos.mp3.mp3");
    audio.loop = true;
    let tocando = false;

    function alternarMusica() {
      if (tocando) {
        audio.pause();
      } else {
        audio.play();
      }
      tocando = !tocando;
    }

    function criarCoracao() {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = 3 + Math.random() * 2 + 's';

      document.querySelector('.hearts-container').appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }

    setInterval(criarCoracao, 400);

    function abrirLinkSecreto() {
      // Exemplo: abre uma página especial, pode ser WhatsApp, um vídeo, mensagem, etc.
      // window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');

      // Ou exibir mensagem:
      alert("Você achou o link secreto! Te amo muito, meu Amor, mês que vem vou cantar essa pra você no show❤️");
    }
  </script>
</body>
</html>
