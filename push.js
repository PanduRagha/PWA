const notifyBtn = document.getElementById("notifyBtn");

notifyBtn.addEventListener("click", () => {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      navigator.serviceWorker.getRegistration().then(reg => {
        reg.showNotification("CODTECH Shop", {
          body: "Thanks for enabling notifications!",
          icon: "images/icon-192.png"
        });
      });
    }
  });
});
