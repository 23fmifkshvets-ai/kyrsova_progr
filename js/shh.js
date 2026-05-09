
let score = localStorage.getItem("score") || 0;
score = Number(score);

let answered1 = localStorage.getItem("a1") === "true";
let answered2 = localStorage.getItem("a2") === "true";
let answered3 = localStorage.getItem("a3") === "true";
let answered4 = localStorage.getItem("a4") === "true";
let answered5 = localStorage.getItem("a5") === "true";
let answered6 = localStorage.getItem("a6") === "true";
let answered7 = localStorage.getItem("a7") === "true";
let answered8 = localStorage.getItem("a8") === "true";
let answered9 = localStorage.getItem("a9") === "true";
let answered10 = localStorage.getItem("a10") === "true";

function showSteps1(btn) {
    const stepsDiv = document.getElementById("steps1");

    if (stepsDiv.innerHTML !== "") {
        stepsDiv.innerHTML = "";
        btn.textContent = "▶ Показати виконання";
        return;
    }

    const steps = [
        "Крок 1: i = 0 → вивід 0",
        "Крок 2: i = 1 → вивід 1",
        "Крок 3: i = 2 → вивід 2"
    ];

    steps.forEach(step => {
        const p = document.createElement("p");
        p.textContent = step;
        stepsDiv.appendChild(p);
    });

    btn.textContent = "❌ Сховати";
}

function showSteps2(btn) {
    const stepsDiv = document.getElementById("steps2");

    const steps = [
        "Крок 1: i = 1 → вивід 1",
        "Крок 2: i = 2 → вивід 2",
        "Крок 3: i = 3 → вивід 3"
    ];

    if (stepsDiv.innerHTML !== "") {
        stepsDiv.innerHTML = "";
        btn.textContent = "▶ Показати виконання";
        return;
    }

    steps.forEach(step => {
        const p = document.createElement("p");
        p.textContent = step;
        stepsDiv.appendChild(p);
    });

    btn.textContent = "❌ Сховати";
}

function showSteps3(btn) {
    const stepsDiv = document.getElementById("steps3");


    if (stepsDiv.innerHTML !== "") {
        stepsDiv.innerHTML = "";
        btn.textContent = "▶ Показати виконання";
        return;
    }

    const steps = [
        "Крок 1: i = 0 → вивід 0",
        "Крок 2: i = 2 → вивід 2",
        "Крок 3: i = 4 → вивід 4",
        "Крок 4: i = 6 → вивід 6",
        "Крок 5: i = 8 → вивід 8"
    ];

    steps.forEach(step => {
        const p = document.createElement("p");
        p.textContent = step;
        stepsDiv.appendChild(p);
    });

    btn.textContent = "❌ Сховати";

}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim();
    const result = document.getElementById("result");
    const normalized = userAnswer.replace(/,/g, " ").replace(/\s+/g, " ").trim();

    if (normalized === "0 1 2") {
        if (!answered1) {
            score++;
            answered1 = true;
            localStorage.setItem("a1", true);
            updateScore();
        }
        result.textContent = "✅ Правильно!";
        result.style.color = "lightgreen";
    } else {
        result.textContent = "❌ Неправильно. Правильна відповідь: 0 1 2";
        result.style.color = "red";
    }
}

function checkFill() {
    const answer = document.getElementById("fillAnswer").value.trim().toLowerCase();
    const result = document.getElementById("fillResult");

    if (answer === "range") {
        if (!answered2) {
            score++;
            answered2 = true;
            localStorage.setItem("a2", true);
            updateScore();
        }
        result.textContent = "✅ Правильно!";
        result.style.color = "lightgreen";
    } else {
        result.textContent = "❌ Неправильно. Правильна відповідь: range";
        result.style.color = "red";
    }
}

function updateScore() {
    const el = document.getElementById("score");

    if (el) {
        el.textContent = score;
    }

    localStorage.setItem("score", score);
}

window.onload = function () {
    updateScore();
};

function normalize(text) {
    return text
        .replace(/,/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}


function checkAnswer2() {
    const val = normalize(document.getElementById("answer2").value);
    const result = document.getElementById("result2");

    if (val === "1 2 3") {
        if (!answered3) {
            score++;
            answered3 = true;
            localStorage.setItem("a3", true);
            updateScore();
        }
        result.textContent = "✅ Правильно!";
        result.style.color = "lightgreen";
    } else {
        result.textContent = "❌ Правильна відповідь: 1 2 3";
        result.style.color = "red";
    }
}


function checkAnswer3() {
    const val = normalize(document.getElementById("answer3").value);
    const result = document.getElementById("result3");

    if (val === "0 2 4") {
        if (!answered4) {
            score++;
            answered4 = true;
            localStorage.setItem("a4", true);
            updateScore();
        }
        result.textContent = "✅ Правильно!";
        result.style.color = "lightgreen";
    } else {
        result.textContent = "❌ Правильна відповідь: 0 2 4";
        result.style.color = "red";
    }
}


function checkFill2() {
    const val = document.getElementById("fillAnswer2").value.trim();
    const result = document.getElementById("fillResult2");

    if (val === "5") {
        if (!answered5) {
            score++;
            answered5 = true;
            localStorage.setItem("a5", true);
            updateScore();
        }
        result.textContent = "✅ Правильно!";
        result.style.color = "lightgreen";
    } else {
        result.textContent = "❌ Правильна відповідь: 5";
        result.style.color = "red";
    }
}


function checkAnswer4() {
    const val = normalize(document.getElementById("answer4").value);
    const result = document.getElementById("result4");

    if (val === "2 3 4 5 6") {
        if (!answered6) {
            score++;
            answered6 = true;
            localStorage.setItem("a6", true);
            updateScore();
        }
        result.textContent = "✅ Правильно!";
        result.style.color = "lightgreen";
    } else {
        result.textContent = "❌ Правильна відповідь: 2 3 4 5 6";
        result.style.color = "red";
    }
}


function checkAnswer5() {
    const val = normalize(document.getElementById("answer5").value);
    const result = document.getElementById("result5");

    if (val === "5 4 3 2 1") {
        if (!answered7) {
            score++;
            answered7 = true;
            localStorage.setItem("a7", true);
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

    if (val === "2 4 6 8") {
        if (!answered8) {
            score++;
            answered8 = true;
            localStorage.setItem("a8", true);
            updateScore();
        }
        result.textContent = "✅ Правильно!";
        result.style.color = "lightgreen";
    } else {
        result.textContent = "❌ Правильна відповідь: 2 4 6 8";
        result.style.color = "red";
    }
}

function checkAnswer7() {
    const val = normalize(document.getElementById("answer7").value);
    const result = document.getElementById("result7");

    if (val === "0 0 1 3 2 6") {
        if (!answered9) {
            score++;
            answered9 = true;
            localStorage.setItem("a9", true);
            updateScore();
        }
        result.textContent = "✅ Правильно!";
        result.style.color = "lightgreen";
    } else {
        result.textContent = "❌ Правильна відповідь: 0 0 1 3 2 6";
        result.style.color = "red";
    }
}


function checkAnswer8() {
    const val = normalize(document.getElementById("answer8").value);
    const result = document.getElementById("result8");

    if (val === "0 1 2") {
        if (!answered10) {
            score++;
            answered10 = true;
            localStorage.setItem("a10", true);
            updateScore();
        }
        result.textContent = "✅ Правильно!";
        result.style.color = "lightgreen";
    } else {
        result.textContent = "❌ Правильна відповідь: 0 1 2";
    }
}

function resetProgress() {
    localStorage.clear();
    location.reload();
}

function showWhileSteps1(btn) {
    const container = document.getElementById("stepsWhile1");

    if (container.innerHTML !== "") {
        container.innerHTML = "";
        btn.textContent = "▶ Показати виконання";
        return;
    }

    btn.textContent = "🔽 Сховати";

    const steps = [
        "Крок 1: i = 0 → умова (0 < 3) ✔ → вивід 0",
        "Крок 2: i = 1 → умова (1 < 3) ✔ → вивід 1",
        "Крок 3: i = 2 → умова (2 < 3) ✔ → вивід 2",
        "Крок 4: i = 3 → умова (3 < 3) ✖ → стоп"
    ];

    steps.forEach(step => {
        const p = document.createElement("p");
        p.textContent = step;
        container.appendChild(p);
    });
}

function showWhileSteps2(btn) {
    const container = document.getElementById("stepsWhile2");

    if (container.innerHTML !== "") {
        container.innerHTML = "";
        btn.textContent = "▶ Показати виконання";
        return;
    }

    btn.textContent = "🔽 Сховати";

    const steps = [
        "Крок 1: i = 1 → (1 ≤ 3) ✔ → вивід 1",
        "Крок 2: i = 2 → (2 ≤ 3) ✔ → вивід 2",
        "Крок 3: i = 3 → (3 ≤ 3) ✔ → вивід 3",
        "Крок 4: i = 4 → (4 ≤ 3) ✖ → стоп"
    ];

    steps.forEach(step => {
        const p = document.createElement("p");
        p.textContent = step;
        container.appendChild(p);
    });
}
