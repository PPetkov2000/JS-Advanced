function notify(message) {
  const notifyBtn = document.getElementById("notifyBtn");
  const notification = document.getElementById("notification");
  notifyBtn.addEventListener("click", function() {
    notification.style.display = "block";
    notification.textContent = "Something happened!";
    setTimeout(function() {
      notification.style.display = "none";
    }, 2000);
  });
}

document.addEventListener("DOMContentLoaded", notify);
