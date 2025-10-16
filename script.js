// Update current time in milliseconds
function updateTime() {
  const timeEl = document.getElementById("time");
  timeEl.textContent = Date.now();
}

// Initial load
updateTime();

// Optional: update every second for dynamic effect
setInterval(updateTime, 1000);
