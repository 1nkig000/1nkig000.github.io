let countdownInterval = null;

export function initCountdown() {
  const targetDate = theme?.home?.sidebar?.countdown?.target_date || '2026/12/31';
  
  clearInterval(countdownInterval);
  
  countdownInterval = setInterval(() => {
    updateCountdown(targetDate);
  }, 1000);
  
  updateCountdown(targetDate);
}

function updateCountdown(targetDateStr) {
  const targetDate = new Date(targetDateStr);
  const now = new Date();
  
  const diff = targetDate - now;
  
  if (diff <= 0) {
    document.getElementById('countdown-days').textContent = '0';
    document.getElementById('countdown-hours').textContent = '0';
    document.getElementById('countdown-minutes').textContent = '0';
    document.getElementById('countdown-seconds').textContent = '0';
    clearInterval(countdownInterval);
    return;
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  document.getElementById('countdown-days').textContent = days.toString().padStart(2, '0');
  document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('countdown-minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('countdown-seconds').textContent = seconds.toString().padStart(2, '0');
}

export function destroyCountdown() {
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }
}
