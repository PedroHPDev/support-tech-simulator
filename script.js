// ELEMENTOS PRINCIPAIS
const startBtn = document.getElementById("start-btn");
const questionArea = document.getElementById("question-area");
const questionTitle = document.getElementById("question-title");
const optionButtons = document.querySelectorAll(".option-btn");
const resultSection = document.getElementById("result");
const resultText = document.getElementById("result-text");
const restartBtn = document.getElementById("restart-btn");

// ESTADO DA APLICAÇÃO
let step = 0;

// FLUXO DE PERGUNTAS
const questions = [
  {
    text: "O computador demora muito para iniciar?",
    yes: "Possível excesso de programas iniciando com o sistema.",
    no: "Verifique se há pouco espaço em disco ou problemas no HD."
  },
  {
    text: "Existem muitos programas abertos ao mesmo tempo?",
    yes: "Feche aplicações desnecessárias para melhorar o desempenho.",
    no: "Considere verificar vírus ou atualizar o sistema."
  }
];

// INICIAR SIMULAÇÃO
startBtn.addEventListener("click", () => {
  startBtn.parentElement.classList.add("hidden");
  questionArea.classList.remove("hidden");
  loadQuestion();
});

// CARREGAR PERGUNTA
function loadQuestion() {
  questionTitle.innerText = questions[step].text;
}

// RESPOSTAS
optionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.innerText.toLowerCase();
    showResult(questions[step][answer]);
  });
});

// MOSTRAR RESULTADO
function showResult(message) {
  questionArea.classList.add("hidden");
  resultSection.classList.remove("hidden");
  resultText.innerText = message;
}

// REINICIAR
restartBtn.addEventListener("click", () => {
  step = 0;
  resultSection.classList.add("hidden");
  startBtn.parentElement.classList.remove("hidden");
});
