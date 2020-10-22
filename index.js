// массив цветов
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
const startBtn = buttons[0];
const stopBtn = buttons[1];

let timeoutId = null;

startBtn.addEventListener('click', onStartBtnClick);

//функция создания инлайна-стиля для body
function colorChange() {
  //функция генерации случайногочисла для индекса массива цветов
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  // возвращаем инлайн-стили
  return (body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)]);
}

function onStartBtnClick() {
  console.log('Start');

  //включаем интервал и вызываем колбек
  timeoutId = setInterval(colorChange, 1000);
  //добавляем слушатель на stopBtn и убираем слушатель со startBtn
  stopBtn.addEventListener('click', onStopBtnClick);
  startBtn.removeEventListener('click', onStartBtnClick);
}

function onStopBtnClick() {
  console.log('Stop');
  // прерываем интервал
  clearInterval(timeoutId);
  //ставим слушатель на startBtn и убираем слушатель со stopBtn
  startBtn.addEventListener('click', onStartBtnClick);
  stopBtn.removeEventListener('click', onStopBtnClick);
}
