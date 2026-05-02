function runVisualization() {
    const emoji = document.getElementById("emoji").value;
    const output = document.getElementById("output");
    const mode = document.getElementById("mode").value;

    output.innerHTML = "";

    let start = 0;
    let stop = 0;
    let step = 1;


    if (mode === "1") {
        stop = Number(document.getElementById("rangeInput").value);

        if (stop > 10) {
            output.innerHTML = "<p style='color:red;'>❌ Максимум 10</p>";
            return;
        }

        if (stop < 1 || isNaN(stop)) {
            output.innerHTML = "<p style='color:red;'>❌ Введи число 1–10</p>";
            return;
        }
    }

    if (mode === "2" || mode === "3") {
        start = Number(document.getElementById("startInput").value);
        stop = Number(document.getElementById("stopInput").value);

        if (isNaN(start) || isNaN(stop)) {
            output.innerHTML = "<p style='color:red;'>❌ Введи start і stop</p>";
            return;
        }


        if (start < 0 || start > 10) {
            output.innerHTML = "<p style='color:red;'>❌ Start: від 0 до 10</p>";
            return;
        }

        if (stop < 0 || stop > 20) {
            output.innerHTML = "<p style='color:red;'>❌ Stop: від 0 до 20</p>";
            return;
        }
    }

    if (mode === "3") {
        step = Number(document.getElementById("stepInput").value);

        if (step === 0) {
            output.innerHTML = "<p style='color:red;'>❌ Step ≠ 0</p>";
            return;
        }

        if (step < 0 || step > 6) {
            output.innerHTML = "<p style='color:red;'>❌ Step: від 0 до 6</p>";
            return;
        }

        if (step > 0 && start >= stop) {
            output.innerHTML = "<p style='color:red;'>❌ При step > 0: start має бути < stop</p>";
            return;
        }

        if (step < 0 && start <= stop) {
            output.innerHTML = "<p style='color:red;'>❌ При step < 0: start має бути > stop</p>";
            return;
        }
    }
    let i = (mode === "1") ? 0 : start;
    let index = 0;

    while (
        (step > 0 && i < stop) ||
        (step < 0 && i > stop)
    ) {


        let currentI = i;
        let currentIndex = index;

        setTimeout(() => {

            const stepDiv = document.createElement("div");
            stepDiv.classList.add("step");

            const codeLine = document.createElement("p");
            codeLine.classList.add("code-line");

            if (mode === "1") {
                codeLine.textContent = `for (${emoji}) in range(${stop}) → i = ${currentI}`;
            }
            else if (mode === "2") {
                codeLine.textContent = `for (${emoji}) in range(${start}, ${stop}) → i = ${currentI}`;
            }
            else {
                codeLine.textContent = `for (${emoji}) in range(${start}, ${stop}, ${step}) → i = ${currentI}`;
            }

            const resultLine = document.createElement("p");
            resultLine.classList.add("result-line");

            let count = currentI > 0 ? currentI : 1;
            resultLine.textContent = emoji.repeat(count);

            stepDiv.appendChild(codeLine);
            stepDiv.appendChild(resultLine);

            output.appendChild(stepDiv);
            stepDiv.scrollIntoView({
                behavior: "smooth",
                block: "end"
            });

        }, index * 500);

        i += step;
        index++;

        if (index > 20) break;
    }
}

function toggleInputs() {
    const mode = document.getElementById("mode").value;

    const extra = document.getElementById("extraInputs");
    const step = document.getElementById("stepBlock");
    const rangeInput = document.getElementById("rangeInput");

    if (mode === "1") {
        extra.style.display = "none";
        step.style.display = "none";

        rangeInput.disabled = false;
    }
    else if (mode === "2") {
        extra.style.display = "block";
        step.style.display = "none";

        rangeInput.disabled = true;
        rangeInput.value = "";
    }
    else {
        extra.style.display = "block";
        step.style.display = "block";

        rangeInput.disabled = true;
        rangeInput.value = "";
    }
}

window.onload = function () {
    toggleInputs();
};