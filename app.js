let count = 0;

function updateDisplay() {
  document.getElementById("count").innerText = count;
}

function increase() {
  count++;
  updateDisplay();
}

function decrease() {
  if (count > 0) {   // 0 se neeche nahi jayega
    count--;
    updateDisplay();
  }
}

function reset() {
  count = 0;
  updateDisplay();
}