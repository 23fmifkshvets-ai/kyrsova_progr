let score = Number(localStorage.getItem("score")) || 0;
let answers = JSON.parse(localStorage.getItem("answers")) || [false, false, false, false, false, false];

function updateScore() {
    document.getElementById("score").textContent = score;
    localStorage.setItem("score", score);
}

function normalize(text) {
    return text.replace(/,/g, " ").replace(/\s+/g, " ").trim();
}

// 1
function checkAnswer() {
    const val = normalize(document.getElementById("answer").value);
    const result = document.getElementById("result");

    if (val === "0 1 2") {
        if (!answers[0]) {
            score++;
            answers[0] = true;
            localStorage.setItem("answers", JSON.stringify(answers));
            updateScore();
        }
        result.textContent = "✅ Правильно!";
        result.style.color = "lightgreen";
    } else {
        result.textContent = "❌ Правильна відповідь: 0 1 2";
        result.style.color = "red";
    }
}

// 2
function checkFill() {
    const val = document.getElementById("fillAnswer").value.trim();
    const result = document.getElementById("fillResult");

    if (val === "1") {
        if (!answers[1]) {
            score++;
            answers[1] = true;
            localStorage.setItem("answers", JSON.stringify(answers));
            updateScore();
        }
        result.textContent = "✅ Правильно!";
        result.style.color = "lightgreen";
    } else {
        result.textContent = "❌ Правильна відповідь: 1";
        result.style.color = "red";
    }
}

// 3
function checkAnswer2() {
    const val = normalize(document.getElementById("answer2").value);
    const result = document.getElementById("result2");

    if (val === "1 2 3") {
        if (!answers[2]) {
            score++;
            answers[2] = true;
            localStorage.setItem("answers", JSON.stringify(answers));
            updateScore();
        }
        result.textContent = "✅ Правильно!";
        result.style.color = "lightgreen";
    } else {
        result.textContent = "❌ Правильна відповідь: 1 2 3";
        result.style.color = "red";
    }
}

// 4
function checkAnswer3() {
    const val = normalize(document.getElementById("answer3").value);
    const result = document.getElementById("result3");

    if (val === "0 2 4") {
        if (!answers[3]) {
            score++;
            answers[3] = true;
            localStorage.setItem("answers", JSON.stringify(answers));
            updateScore();
        }
        result.textContent = "✅ Правильно!";
        result.style.color = "lightgreen";
    } else {
        result.textContent = "❌ Прааильна відповідь: 0 2 4";
        result.style.color = "red";
    }
}

// 5
function checkAnswer4() {
    const val = normalize(document.getElementById("answer4").value);
    const result = document.getElementById("result4");

    if (val === "2 3 4 5 6") {
        if (!answers[4]) {
            score++;
            answers[4] = true;
            localStorage.setItem("answers", JSON.stringify(answers));
            updateScore();
        }
        result.textContent = "✅ Правильно!";
        result.style.color = "lightgreen";
    } else {
        result.textContent = "❌ Прааильна відповідь: 2 3 4 5 6";
        result.style.color = "red";
    }
}

// 6
function checkAnswer5() {
    const val = normalize(document.getElementById("answer5").value);
    const result = document.getElementById("result5");

    if (val === "5 4 3 2 1") {
        if (!answers[5]) {
            score++;
            answers[5] = true;
            localStorage.setItem("answers", JSON.stringify(answers));
            updateScore();
        }
        result.textContent = "✅ Правильно!";
       result.style.color = "lightgreen"; 
    } else {
        result.textContent = "❌ Правильна відповідь: 5 4 3 2 1";
        result.style.color = "red"; 
    }
}

function checkAnswer6() {
    const val = normalize(document.getElementById("answer6").value);
    const result = document.getElementById("result6");

    if (val === "3 6 9") {
        if (!answers[6]) {
            score++;
            answers[6] = true;
            localStorage.setItem("answers", JSON.stringify(answers));
            updateScore();
        }
        result.textContent = "✅ Правильно!";
        result.style.color = "lightgreen";
    } else {
        result.textContent = "❌ Правильна відповідь: 3 6 9";
        result.style.color = "red";
    }
}

function checkAnswer7() {
    const val = normalize(document.getElementById("answer7").value);
    const result = document.getElementById("result7");

    if (val === "10 8 6 4 2") {
        if (!answers[7]) {
            score++;
            answers[7] = true;
            localStorage.setItem("answers", JSON.stringify(answers));
            updateScore();
        }
        result.textContent = "✅ Правильно!";
       result.style.color = "lightgreen"; 
    } else {
        result.textContent = "❌ Правильнв відповідь: 10 8 6 4 2";
        result.style.color = "red";
    }
}

function checkFill3() {
    const val = document.getElementById("fillAnswer3").value.trim();
    const result = document.getElementById("fillResult3");

    if (val === "2") {
        if (!answers[8]) {
            score++;
            answers[8] = true;
            localStorage.setItem("answers", JSON.stringify(answers));
            updateScore();
        }
        result.textContent = "✅ Правильно!";
        result.style.color = "lightgreen";
    } else {
        result.textContent = "❌ Правильна відповідь: 2";
        result.style.color = "red";
    }
}

function checkAnswer8() {
    const val = normalize(document.getElementById("answer8").value);
    const result = document.getElementById("result8");

    if (val === "1 2 3 4 5") {
        if (!answers[9]) {
            score++;
            answers[9] = true;
            localStorage.setItem("answers", JSON.stringify(answers));
            updateScore();
        }
        result.textContent = "✅ Правильно!";
        result.style.color = "lightgreen";
    } else {
        result.textContent = "❌ Прааильна відповідь: 1 2 3 4 5";
        result.style.color = "red";
    }
}

function resetProgress() {
    localStorage.clear();
    location.reload();
}

window.onload = updateScore;
