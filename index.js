// массив цветов
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
// объект элементов
const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

let timeoutId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);

//функция создания инлайна-стиля для body
function colorChange() {
  //функция генерации случайногочисла для индекса массива цветов
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  // возвращаем инлайн-стили
  return (refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)]);
}

function onStartBtnClick() {
  console.log('Start');

  //включаем интервал и вызываем колбек
  timeoutId = setInterval(colorChange, 1000);
  //добавляем слушатель на stopBtn и убираем слушатель со startBtn
  refs.stopBtn.addEventListener('click', onStopBtnClick);
  refs.startBtn.removeEventListener('click', onStartBtnClick);
}

function onStopBtnClick() {
  console.log('Stop');
  // прерываем интервал
  clearInterval(timeoutId);
  //ставим слушатель на startBtn и убираем слушатель со stopBtn
  refs.startBtn.addEventListener('click', onStartBtnClick);
  refs.stopBtn.removeEventListener('click', onStopBtnClick);
}
