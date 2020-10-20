const buttons = document.querySelectorAll('button');
const startBtn = buttons[0];
const stopBtn = buttons[1];
const body = document.querySelector('body');
startBtn.addEventListener('click', onStartBtnClick);
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let timeoutId = null;
function onStartBtnClick() {
  console.log('Start');
  //функция генерации случайногочисла дляиндекса массива цветов
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  //функция создания инлайна-стиля для body
  function colorChange(indexNumber) {
    console.log(colors[indexNumber]);
    console.log(colors.length);

    return (body.style.backgroundColor = colors[indexNumber]);
  }
  //включаем интервал
  timeoutId = setInterval(
    colorChange,
    1000,
    randomIntegerFromInterval(0, colors.length),
  );
  //добавляем слушатель на stopBtn и убираем слушатель со startBtn
  stopBtn.addEventListener('click', onStopBtnClick);
  startBtn.removeEventListener('click', onStartBtnClick);
}
function onStopBtnClick() {
  console.log('Stop');
  // прерываем интервал
  clearTimeout(timeoutId);
  //ставим слушатель на startBtn и убираем слушатель со stopBtn
  startBtn.addEventListener('click', onStartBtnClick);
  stopBtn.removeEventListener('click', onStopBtnClick);
}
