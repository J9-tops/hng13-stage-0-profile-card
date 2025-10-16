// Function to update the UTC time
function updateUTCTime() {
  const utcElement = document.querySelector("[data-testid='test-user-time']");
  const now = new Date();
  utcElement.textContent = `${
    now.toISOString().split("T")[1].split(".")[0]
  } UTC`;
}

updateUTCTime();
