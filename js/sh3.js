function checkCondition(i, limit, condition) {
    if (condition === "<") return i < limit;
    if (condition === "<=") return i <= limit;
    if (condition === ">") return i > limit;
    if (condition === ">=") return i >= limit;
}

function runWhileVisualization() {
    const condition = document.getElementById("conditionType").value;
    const emoji = document.getElementById("emoji").value;
    const start = Number(document.getElementById("startInput").value);
    const limit = Number(document.getElementById("limitInput").value);
    const step = Number(document.getElementById("stepInput").value);
    const output = document.getElementById("output");

    output.innerHTML = "";

    if (isNaN(start) || isNaN(limit) || isNaN(step)) {
        output.innerHTML = "❌ Заповни всі поля";
        return;
    }
    if (start < 0 || start > 20) {
        output.innerHTML = "❌ Start: 0–20";
        return;
    }

    if (limit < start + 1 || limit > 30) {
        output.innerHTML = "❌ Limit: від start+1 до 30";
        return;
    }
    if (step === 0) {
        output.innerHTML = "❌ Step ≠ 0";
        return;
    }
    if (step > 0 && (condition === ">" || condition === ">=")) {
        output.innerHTML = "❌ При step > 0 цикл буде нескінченний";
        return;
    }

    if (step < 0 && (condition === "<" || condition === "<=")) {
        output.innerHTML = "❌ При step < 0 цикл буде нескінченний";
        return;
    }

    let i = start;
    let index = 0;

    while (true) {

        let conditionResult = false;

        if (condition === "<") conditionResult = i < limit;
        if (condition === "<=") conditionResult = i <= limit;
        if (condition === ">") conditionResult = i > limit;
        if (condition === ">=") conditionResult = i >= limit;

        if (!conditionResult) break;

        let currentI = i;
        let currentIndex = index;

        setTimeout(() => {
            const stepDiv = document.createElement("div");

            const codeLine = document.createElement("p");

            codeLine.textContent =
                `i = ${currentI} → ${currentI} ${condition} ${limit} → ${conditionResult ? "true ✅" : "false ❌"}`;

            const resultLine = document.createElement("p");
            resultLine.textContent = emoji.repeat(Math.max(1, currentI));

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
