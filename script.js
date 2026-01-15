// ELEMENTOS
const startBtn = document.getElementById("start-btn");
const questionArea = document.getElementById("question-area");
const questionTitle = document.getElementById("question-title");
const optionButtons = document.querySelectorAll(".option-btn");
const resultSection = document.getElementById("result");
const resultText = document.getElementById("result-text");
const restartBtn = document.getElementById("restart-btn");

// ESTADO
let step = 0;
let finalMessage = "";

// PERGUNTAS
const questions = [
  {
    text: "O computador demora muito para iniciar?",
    yes: "Possível excesso de programas iniciando com o sistema.",
    no: "Pode haver pouco espaço em disco ou problema no HD."
  },
  {
    text: "Existem muitos programas abertos ao mesmo tempo?",
    yes: "Fechar aplicações desnecessárias pode melhorar o desempenho.",
    no: "Recomenda-se verificar vírus ou atualizar o sistema."
  }
];

// INICIAR
startBtn.addEventListener("click", () => {
  startBtn.parentElement.classList.add("hidden");
  questionArea.classList.remove("hidden");
  loadQuestion();
});

// CARREGAR PERGUNTA
function loadQuestion() {
  questionTitle.innerText = questions[step].text;
}

// CLIQUE NAS OPÇÕES
optionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const answer =
      button.innerText === "Sim" ? "yes" : "no";

    finalMessage = questions[step][answer];
    step++;

    if (step < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
});

// MOSTRAR RESULTADO
function showResult() {
  questionArea.classList.add("hidden");
  resultSection.classList.remove("hidden");
  resultText.innerText = finalMessage;
}

// REINICIAR
restartBtn.addEventListener("click", () => {
  step = 0;
  finalMessage = "";
  resultSection.classList.add("hidden");
  startBtn.parentElement.classList.remove("hidden");
});


