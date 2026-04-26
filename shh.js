let score = 0;
let answered1 = false;

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


let answered2 = false;

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
