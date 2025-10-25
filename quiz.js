const allQuestions = [
  "How often do you feel overwhelmed or anxious?",
  "Do you struggle with sleep or fatigue?",
  "How would you describe your mood most days?",
  "Do you find it hard to concentrate or stay motivated?",
  "Do you feel socially withdrawn or disconnected?",
  "Do you experience frequent mood swings?",
  "Do you feel hopeless or helpless?",
  "Do you avoid social situations?",
  "Do you have trouble making decisions?",
  "Do you feel irritable or angry often?",
  "Do you feel emotionally numb?",
  "Do you experience panic attacks?",
  "Do you feel guilt or shame frequently?",
  "Do you have difficulty enjoying activities?",
  "Do you feel like a burden to others?",
  "Do you have racing thoughts?",
  "Do you feel tired even after sleeping?",
  "Do you feel disconnected from reality?",
  "Do you have trouble remembering things?",
  "Do you feel like you're being watched or judged?",
  "Do you feel anxious in public places?",
  "Do you have trouble expressing emotions?",
  "Do you feel overwhelmed by daily tasks?",
  "Do you feel like you're losing control?",
  "Do you feel pressure to be perfect?",
  "Do you feel unsafe or threatened?",
  "Do you feel like you're not good enough?",
  "Do you feel trapped in your thoughts?",
  "Do you feel like you can't relax?",
  "Do you feel emotionally exhausted?"
];

function loadQuiz() {
  const quizForm = document.getElementById("quizForm");
  quizForm.innerHTML = "";
  const selected = [...allQuestions]
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);

  selected.forEach((question, index) => {
    const qNum = index + 1;
    const div = document.createElement("div");
    div.className = "quiz-question";
    div.innerHTML = `
      <p>${qNum}. ${question}</p>
      <label><input type="radio" name="q${qNum}" value="2" required> Always</label>
      <label><input type="radio" name="q${qNum}" value="1"> Often</label>
      <label><input type="radio" name="q${qNum}" value="0"> Sometimes</label>
      <label><input type="radio" name="q${qNum}" value="0"> Rarely</label>
    `;
    quizForm.appendChild(div);
  });
}

function submitQuiz() {
  let score = 0;
  for (let i = 1; i <= 10; i++) {
    const val = document.querySelector(`input[name="q${i}"]:checked`);
    if (val) score += parseInt(val.value);
  }

  let resultText = "";
  if (score >= 15) {
    resultText += "Your responses suggest elevated stress or emotional challenges. Consider speaking with a mental health professional.";
  } else if (score >= 8) {
    resultText += "You may be experiencing moderate emotional strain. Self-care and support can help.";
  } else {
    resultText += "Your responses suggest stable mental wellbeing. Keep practicing healthy habits.";
  }

  document.getElementById("quizResult").innerText = resultText;
}

document.getElementById("submitBtn").addEventListener("click", function (e) {
  e.preventDefault();
  submitQuiz();
});

window.onload = loadQuiz;