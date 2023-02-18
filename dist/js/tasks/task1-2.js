const dataElem = document.getElementsByClassName('task1_data')[0];
const timeElem = document.getElementsByClassName('task1_time')[0];
const calendar = document.getElementsByClassName('calendar')[0];
const dayWeekArr = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];
const monthArr = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];
let checkCalendar = true;
function calendarGridFiller(month,dayWeek,day) {
  checkCalendar = false;
  const initDay = day;
  const calendarMonth = calendar.childNodes[1];
  const calendarGrid = calendar.getElementsByClassName('calendar_grid')[0];
  calendarGrid.childNodes.forEach(elem => elem.remove());
  calendarMonth.textContent = monthArr[month];
  day%=7; dayWeek-=day; if (dayWeek < 0) dayWeek = 7 + dayWeek;

  let daysInMonth = 0;
  if ([1,4,6,8,10].includes(month)) daysInMonth = 31;
  else if (month == 2) daysInMonth = 28;
  else daysInMonth = 30;

  let counter = 0;

  for (let i = daysInMonth - dayWeek + 1; i < daysInMonth + 1;i++) {
    const calendarDayElem = document.createElement('p');
    calendarDayElem.textContent = i.toString();
    calendarDayElem.className = 'calendar_dayMarker';
    calendarDayElem.style.color = 'grey';
    calendarGrid.appendChild(calendarDayElem);
    counter++;
  }

  if ([0,2,4,6,8,10].includes(month)) daysInMonth = 31;
  else if (month == 1) daysInMonth = 28;
  else daysInMonth = 30;

  for (let i = 1; i <= daysInMonth;i++) {
    const calendarDayElem = document.createElement('p');
    calendarDayElem.textContent = i.toString();
    calendarDayElem.className = 'calendar_dayMarker';
    calendarGrid.appendChild(calendarDayElem);
    if (i == initDay) {
      calendarDayElem.style.color = '#db545a';
      calendarDayElem.style.backgroundColor = '#f1c50e';
    }
    counter++;
  }

  counter = 7 - counter%7;

  for (let i = 1; i <= counter;i++) {
    const calendarDayElem = document.createElement('p');
    calendarDayElem.textContent = i.toString();
    calendarDayElem.className = 'calendar_dayMarker';
    calendarDayElem.style.color = 'grey';
    calendarGrid.appendChild(calendarDayElem);
  }
}
function clock() {
  const date = new Date();
  const hours = (date.getHours() < '10') ? '0' + date.getHours() : date.getHours();
  const minutes = (date.getMinutes() < '10') ? '0' + date.getMinutes() : date.getMinutes();
  const seconds = (date.getSeconds() < '10') ? '0' + date.getSeconds() : date.getSeconds();
  timeElem.textContent = hours + ' / ' + minutes + ' / ' + seconds;
  const dayWeek = date.getDay();
  const day = (date.getDate() < '10') ? '0' + date.getDate() : date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth();
  dataElem.textContent = dayWeekArr[dayWeek] + ', ' + year + ' ' + day + ' ' + monthArr[month];
  if (checkCalendar) calendarGridFiller(month,dayWeek,day);
}

setInterval(clock,1000);
