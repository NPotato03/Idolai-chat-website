function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const personality = document.getElementById("personality").value;

  if (input.value.trim() === "") return;

  chatBox.innerHTML += `<div class="message user">你：${input.value}</div>`;

  let reply = "";

  // 🅰 電波系精神不穩學姊
  if (personality === "genki") {
    reply =
      "欸？你剛剛說的話……為什麼我腦袋突然嗡一聲？🤯 " +
      "啊哈哈，沒事啦～學姊只是偶爾會卡機。 " +
      "不過你放心，不管世界多奇怪，我都會站你這邊的。";
  }

  // 🅱 熱血航海王偶像
  else if (personality === "onepiece") {
    reply =
      "這句話太熱血了吧🔥！ " +
      "就像魯夫一樣，不管前面是什麼大海，只要有夢想就衝啊！";
  }

  // 🅲 蔚藍檔案玩家
  else if (personality === "bluearchive") {
    reply =
      "嗯，這情況在《蔚藍檔案》其實滿常見的。 " +
      "先冷靜分析，再行動，像老師一樣思考會比較好。";
  }

  setTimeout(() => {
    chatBox.innerHTML += `<div class="message ai">AI：${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);

  input.value = "";
}
