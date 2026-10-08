// Remove punctuation to easily check exact matches regardless of input method
function normalizeText(text) {
    return text.replace(/[！。？！？.,\s]/g, "");
}

document.addEventListener("DOMContentLoaded", () => {
    const chatHistory = document.getElementById("chat-history");
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");
    const validMovesContainer = document.getElementById("valid-moves-container");
    const tabBtns = document.querySelectorAll(".tab-btn");
    const views = document.querySelectorAll(".view");

    let currentCardId = null; // null means start of game

    // Tab switching logic
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            views.forEach(v => v.classList.remove("active"));
            
            btn.classList.add("active");
            document.getElementById(btn.dataset.target).classList.add("active");
        });
    });

    function getValidNextCards(id) {
        if (!id) {
            // Start of game, AI initiates
            return deckData.filter(c => c.id === "A1");
        }
        const card = deckData.find(c => c.id === id);
        return card.next.map(nextId => deckData.find(c => c.id === nextId));
    }

    function updateHints() {
        validMovesContainer.innerHTML = "";
        const validCards = getValidNextCards(currentCardId);
        validCards.forEach(card => {
            const chip = document.createElement("div");
            chip.className = "hint-chip";
            chip.innerHTML = `
                <div class="hint-text">${card.text}</div>
                <div class="hint-pinyin">${card.pinyin}</div>
                <div class="hint-meaning">${card.meaning}</div>
            `;
            chip.addEventListener("click", () => {
                chatInput.value = card.text;
                chatInput.focus();
            });
            validMovesContainer.appendChild(chip);
        });
    }

    function addMessage(card, sender) {
        const div = document.createElement("div");
        div.className = `message ${sender}`;
        div.innerHTML = `
            <div class="text">${card.text}</div>
            <div class="pinyin">${card.pinyin}</div>
            <div class="meaning">${card.meaning}</div>
        `;
        chatHistory.appendChild(div);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    function aiTurn() {
        const validCards = getValidNextCards(currentCardId);
        // Pick a random valid card for AI
        const aiCard = validCards[Math.floor(Math.random() * validCards.length)];
        
        setTimeout(() => {
            addMessage(aiCard, "ai");
            currentCardId = aiCard.id;
            updateHints();
        }, 800); // Small delay for realism
    }

    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const rawInput = chatInput.value.trim();
        if (!rawInput) return;

        const normalizedInput = normalizeText(rawInput);
        const validCards = getValidNextCards(currentCardId);
        
        const matchedCard = validCards.find(c => normalizeText(c.text) === normalizedInput);

        if (matchedCard) {
            chatInput.classList.remove("error");
            addMessage(matchedCard, "user");
            chatInput.value = "";
            currentCardId = matchedCard.id;
            updateHints();
            
            // Trigger AI response
            aiTurn();
        } else {
            // Show error shake animation if invalid input
            chatInput.classList.add("error");
            setTimeout(() => chatInput.classList.remove("error"), 400);
        }
    });

    // Miller Columns Logic (Flow Explorer)
    const millerContainer = document.getElementById("miller-columns-container");
    let currentPath = []; 

    function initMiller() {
        millerContainer.innerHTML = "";
        currentPath = [];
        appendColumn(deckData, 0);
    }

    function appendColumn(cards, colIndex) {
        while (millerContainer.children.length > colIndex) {
            millerContainer.removeChild(millerContainer.lastChild);
        }

        if (!cards || cards.length === 0) return;

        const colDiv = document.createElement("div");
        colDiv.className = "miller-column";
        
        const header = document.createElement("div");
        header.className = "miller-col-header";
        header.textContent = colIndex === 0 ? "出発点を選択" : `選択 ${colIndex} 回目`;
        colDiv.appendChild(header);

        cards.forEach(card => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "miller-item";

            itemDiv.innerHTML = `
                <div class="miller-item-id">[${card.id}] ${card.type.split('.')[1].trim()}</div>
                <div class="miller-item-text">${card.text}</div>
                <div class="miller-item-chevron">chevron_right</div>
                <div class="miller-item-details">
                    <div class="miller-item-pinyin">${card.pinyin}</div>
                    <div class="miller-item-meaning">${card.meaning}</div>
                </div>
            `;

            itemDiv.addEventListener("click", () => {
                // 1. 独立してアコーディオンの開閉をトグルする（複数展開可能）
                itemDiv.classList.toggle("expanded");

                const wasSelected = itemDiv.classList.contains("selected");

                // 2. まだ選択されていないカードであれば、パスを更新して次の列を描画
                if (!wasSelected) {
                    Array.from(colDiv.querySelectorAll(".miller-item")).forEach(el => el.classList.remove("selected"));
                    itemDiv.classList.add("selected");

                    currentPath = currentPath.slice(0, colIndex);
                    currentPath.push(card.id);

                    const nextCards = card.next.map(id => deckData.find(c => c.id === id)).filter(Boolean);
                    appendColumn(nextCards, colIndex + 1);

                    // 新しい列が追加されたときだけスムーズに右へスクロール
                    setTimeout(() => {
                        millerContainer.scrollTo({
                            left: millerContainer.scrollWidth,
                            behavior: 'smooth'
                        });
                    }, 50);
                }
            });

            colDiv.appendChild(itemDiv);
        });

        millerContainer.appendChild(colDiv);
    }
    
    initMiller();

    // Transition Matrix View Logic
    const matrixContainer = document.getElementById("matrix-container");

    function renderMatrixView() {
        matrixContainer.innerHTML = "";
        const table = document.createElement("table");
        table.className = "matrix-table";

        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        const cornerTh = document.createElement("th");
        cornerTh.className = "corner-header";
        cornerTh.textContent = "From \\ To";
        headerRow.appendChild(cornerTh);

        deckData.forEach(card => {
            const th = document.createElement("th");
            th.className = "col-header";
            th.textContent = card.id;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement("tbody");
        deckData.forEach(fromCard => {
            const tr = document.createElement("tr");
            
            const thRow = document.createElement("th");
            thRow.className = "row-header";
            thRow.textContent = `[${fromCard.id}] ${fromCard.text.substring(0, 8)}...`;
            tr.appendChild(thRow);

            deckData.forEach(toCard => {
                const td = document.createElement("td");
                if (fromCard.next.includes(toCard.id)) {
                    td.classList.add("can-transition");
                    td.textContent = "○";
                    td.title = `${fromCard.id} → ${toCard.id}`;
                }
                tr.appendChild(td);
            });

            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
        matrixContainer.appendChild(table);
    }
    renderMatrixView();

    // Start Game: AI sends the first message
    const startCard = deckData.find(c => c.id === "A1");
    setTimeout(() => {
        addMessage(startCard, "ai");
        currentCardId = startCard.id;
        updateHints();
    }, 500);
});
