// =========================
// ELEMENTOS DO DOM
// =========================
const startBtn = document.getElementById("start-btn");
const questionArea = document.getElementById("question-area");
const questionTitle = document.getElementById("question-title");
const optionButtons = document.querySelectorAll(".option-btn");
const resultSection = document.getElementById("result");
const resultText = document.getElementById("result-text");
const restartBtn = document.getElementById("restart-btn");


// =========================
// ESTADO DA APLICAÇÃO
// =========================
let step = 0;
let finalMessage = "";
let currentScenario = [];


// =========================
// CENÁRIOS DE SUPORTE
// =========================
const scenarios = {
  slow: [
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
  ],

  internet: [
    {
      text: "O Wi-Fi está conectado?",
      yes: "O problema pode estar no roteador ou no provedor.",
      no: "Ative o Wi-Fi ou verifique o adaptador de rede."
    }
  ]
};


// =========================
// INICIAR SIMULAÇÃO
// =========================
startBtn.addEventListener("click", () => {
  const problem = startBtn.dataset.problem || "slow";

  currentScenario = scenarios[problem];
  step = 0;
  finalMessage = "";

  startBtn.parentElement.classList.add("hidden");
  questionArea.classList.remove("hidden");

  loadQuestion();
});


// =========================
// CARREGAR PERGUNTA
// =========================
function loadQuestion() {
  questionTitle.innerText = currentScenario[step].text;
}


// =========================
// RESPOSTAS (SIM / NÃO)
// =========================
optionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.innerText.toLowerCase();

    finalMessage = currentScenario[step][answer];
    step++;

    if (step < currentScenario.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
});


// =========================
// MOSTRAR RESULTADO
// =========================
function showResult() {
  questionArea.classList.add("hidden");
  resultSection.classList.remove("hidden");
  resultText.innerText = finalMessage;
}


// =========================
// REINICIAR SIMULAÇÃO
// =========================
restartBtn.addEventListener("click", () => {
  step = 0;
  finalMessage = "";
  currentScenario = [];

  resultSection.classList.add("hidden");
  startBtn.parentElement.classList.remove("hidden");
});


