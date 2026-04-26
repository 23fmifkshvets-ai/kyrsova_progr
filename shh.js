let score = 0;

let answered1 = false;
let answered2 = false;

// Показ кроків виконання циклу
function showSteps() {
    const stepsDiv = document.getElementById("steps");

    const steps = [
        "Крок 1: i = 0 → вивід 0",
        "Крок 2: i = 1 → вивід 1",
        "Крок 3: i = 2 → вивід 2"
    ];

    stepsDiv.innerHTML = "";

    steps.forEach(step => {
        const p = document.createElement("p");
        p.textContent = step;
        stepsDiv.appendChild(p);
    });
}

// Перевірка першого завдання
function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const result = document.getElementById("result");

    const normalized = userAnswer
        .replace(/,/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    if (normalized === "0 1 2") {

        if (!answered1) {
            score++;
            answered1 = true;
            updateScore();
        }

        result.textContent = "✅ Правильно!";
        result.style.color = "lightgreen";

    } else {
        result.textContent = "❌ Неправильно. Правильна відповідь: 0 1 2";
        result.style.color = "red";
    }
}

// Перевірка другого завдання
function checkFill() {
    const answer = document.getElementById("fillAnswer").value.trim().toLowerCase();
    const result = document.getElementById("fillResult");

    if (answer === "range") {

        if (!answered2) {
            score++;
            answered2 = true;
            updateScore();
        }

        result.textContent = "✅ Правильно!";
        result.style.color = "lightgreen";

    } else {
        result.textContent = "❌ Неправильно. Правильна відповідь: range";
        result.style.color = "red";
    }
}

// Оновлення балів
function updateScore() {
    document.getElementById("score").textContent = score;
}
