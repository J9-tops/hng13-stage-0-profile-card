function updateUTCTime() {
  const utcElement = document.querySelector("[data-testid='test-user-time']");
  utcElement.textContent = Date.now();
}

updateUTCTime();
