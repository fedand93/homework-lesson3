// ввод данных пользователем
const daysTillWeekend = Number(prompt('Сколько дней до выходных?'));
let sighMessage = 'О';
// Здесь напишите ваш цикл, который добавляет '-хо' 
// к sighMessage за каждый оставшийся день
if (daysTillWeekend > 0 && daysTillWeekend <= 5) {
  for (let i = 0; i < daysTillWeekend; i++) {
    sighMessage = sighMessage + '-xo';
  }
} 
if (daysTillWeekend > 5) {
  sighMessage = "Ой, отдохни ещё на выходных этой недели"
}
// Здесь напишите условие, которое добавит к результату радостный
// восклицательный знак, если выходные уже наступили
if (!daysTillWeekend) { 
  sighMessage = sighMessage + '!';
}
// выведите результат с помощью alert
alert(sighMessage);