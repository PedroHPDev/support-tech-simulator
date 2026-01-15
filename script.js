// =========================
// ELEMENTOS DO DOM
// =========================
const startButtons = document.querySelectorAll(".start-btn");
const questionArea = document.getElementById("question-area");
const questionTitle = document.getElementById("question-title");
const optionButtons = document.querySelectorAll(".option-btn");
const resultSection = document.getElementById("result");
const resultText = document.getElementById("result-text");
const restartBtn = document.getElementById("restart-btn");
const introSection = document.querySelector(".intro");


// =========================
// ESTADO DA APLICAÇÃO
// =========================
let step = 0;
let finalMessage = "";
let currentScenario = [];
let severity = "";
let history = [];


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

  boot: [
    {
      text: "O computador dá algum sinal ao ligar?",
      yes: "Pode ser problema no sistema operacional.",
      no: "Possível falha na fonte ou energia."
    },
    {
      text: "Alguma luz acende no gabinete?",
      yes: "Verifique memória ou HD.",
      no: "Recomenda-se verificar cabos ou fonte."
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

  boot: [
    {
      text: "O computador dá algum sinal ao ligar?",
      yes: "Pode ser problema no sistema operacional.",
      no: "Possível falha na fonte ou energia."
    },
    {
      text: "Alguma luz acende no gabinete?",
      yes: "Verifique memória ou HD.",
      no: "Recomenda-se verificar cabos ou fonte."
    }
  ]



// =========================
// INICIAR SIMULAÇÃO
// =========================
startButtons.forEach(button => {
  button.addEventListener("click", () => {
    const problem = button.dataset.problem;

    currentScenario = scenarios[problem];
    step = 0;
    finalMessage = "";

    introSection.classList.add("hidden");
    questionArea.classList.remove("hidden");

    loadQuestion();
  });
});


// =========================
// CARREGAR PERGUNTA
// =========================
function showResult() {
  questionArea.classList.add("hidden");
  resultSection.classList.remove("hidden");

  resultText.innerText = finalMessage;

  const severityText = document.getElementById("severity");
  const historyList = document.getElementById("history-list");

  // severidade
  if (severity === "baixo") {
    severityText.innerText = "🟢 Severidade: Baixa";
  } else if (severity === "medio") {
    severityText.innerText = "🟡 Severidade: Média";
  } else {
    severityText.innerText = "🔴 Severidade: Crítica";
  }

  // histórico
  historyList.innerHTML = "";
  history.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.question} → ${item.answer.toUpperCase()}`;
    historyList.appendChild(li);
  });
}


// =========================
// RESPOSTAS (SIM / NÃO)
// =========================
optionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.innerText.toLowerCase();

    // salva histórico
    history.push({
      question: currentScenario[step].text,
      answer: answer
    });

    const response = currentScenario[step][answer];
    finalMessage = response.message;
    severity = response.level;

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
severity = "";
history = [];

  resultSection.classList.add("hidden");
  introSection.classList.remove("hidden");
});

