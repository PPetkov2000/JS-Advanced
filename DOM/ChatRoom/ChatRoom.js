function manageChat() {
  let chatMessages = document.querySelector("#chat_messages");
  let messageBox = document.querySelector("#chat_input");

  if (chatMessages === null || messageBox === null) {
    throw new Error("Missing elements!");
  }

  if (messageBox.value === "") {
    throw new Error("Please fill the field!");
  }

  let message = document.createElement("div");
  message.classList.add("message");
  message.classList.add("my-message");
  message.textContent = messageBox.value;
  chatMessages.appendChild(message);
  messageBox.value = "";
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#send").addEventListener("click", manageChat);
});
