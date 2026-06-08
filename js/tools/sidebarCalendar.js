let currentYear, currentMonth;

export function initCalendar() {
  const today = new Date();
  currentYear = today.getFullYear();
  currentMonth = today.getMonth();
  renderCalendar(currentYear, currentMonth);
}

function renderCalendar(year, month) {
  const calendarTitle = document.getElementById('calendar-title');
  const calendarDays = document.getElementById('calendar-days');
  
  if (!calendarTitle || !calendarDays) return;

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startDay = firstDay.getDay();
  
  const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
  calendarTitle.textContent = `${year}年${months[month]}`;

  let html = '';
  
  for (let i = 0; i < startDay; i++) {
    html += '<span class="day other-month"></span>';
  }

  const today = new Date();
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;
  
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = isCurrentMonth && today.getDate() === day;
    html += `<span class="day ${isToday ? 'today' : ''}" data-day="${day}">${day}</span>`;
  }

  calendarDays.innerHTML = html;
}

export function changeCalendarMonth(delta) {
  currentMonth += delta;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  } else if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentYear, currentMonth);
}
