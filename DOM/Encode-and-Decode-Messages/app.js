function encodeAndDecodeMessages() {
  const sentMessage = document.getElementById("sentMessage");
  const rececivedMessageInput = document.getElementById("receivedMessage");

  function sentMsg() {
    let encodedMessage = "";
    for (let i = 0; i < sentMessage.value.length; i++) {
      let currChar = sentMessage.value[i];
      encodedMessage += String.fromCharCode(currChar.charCodeAt(0) + 1);
    }
    sentMessage.value = "";
    rececivedMessageInput.value = encodedMessage;
  }

  function receiveMsg() {
    let decodedMessage = "";
    for (let i = 0; i < rececivedMessageInput.value.length; i++) {
      let currChar = rececivedMessageInput.value[i];
      decodedMessage += String.fromCharCode(currChar.charCodeAt(0) - 1);
    }
    rececivedMessageInput.value = decodedMessage;
  }

  document.getElementById("encode").addEventListener("click", sentMsg);
  document.getElementById("decode").addEventListener("click", receiveMsg);
}

document.addEventListener("DOMContentLoaded", encodeAndDecodeMessages);
