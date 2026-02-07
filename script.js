function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const box = document.getElementById("chat-box");
  const p = document.getElementById("personality").value;

  if (!input.value) return;

  box.innerHTML += `<div class="user">你：${input.value}</div>`;

  let reply = "";

  if (p === "genki") {
    reply = randomPick([
      "大便",
      "💩",
      "屁眼。"
    ]);
  } else if (p === "onepiece") {
    reply = randomPick([
      "這就是色色的開始啊🔥",
      "有妮姬就不會輸！",
      "向保底出航吧！"
    ]);
  } else {
    reply = randomPick([
      "Miku！Miku ！",
      "這情況在蔚藍檔案很常見。",
      "本狼師很冷靜。"
    ]);
  }

  setTimeout(() => {
    box.innerHTML += `<div class="ai">AI：${reply}</div>`;
    box.scrollTop = box.scrollHeight;
  }, 400);

  input.value = "";
}


  setTimeout(() => {
    chatBox.innerHTML += `<div class="message ai">AI：${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);

  input.value = "";
}

