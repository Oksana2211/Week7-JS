const blockTasks = document.querySelector('.block-tasks');//основной блок для планировщика задач (section)

const blockTasksHeader1 = document.createElement('h3');//создаем заголовок1
blockTasksHeader1.className = 'block-tasks__h3';
blockTasksHeader1.textContent = "Запишите задачу";
blockTasks.appendChild(blockTasksHeader1);//добавляем заголовок1 в основном блок (section)


const input = document.createElement('input'); //создаем поле для ввода
input.className = 'block-tasks__input';
blockTasks.appendChild(input);//добавляем поле в основном блок (section)


const inputBtn = document.createElement('button');//создаем кнопку для добавления задач
inputBtn.className = 'btn block-tasks__inputBtn';
inputBtn.textContent = "Добавить";
blockTasks.appendChild(inputBtn);//добавляем кнопку в основном блок (section)


const blockTasksHeader2 = document.createElement('h3');//создаем заголовок2
blockTasksHeader2.className = 'block-tasks__h3';
blockTasksHeader2.textContent = "Список задач";
blockTasks.appendChild(blockTasksHeader2);//добавляем заголовок2 в основном блок (section)


const сonclusion = document.createElement('div'); //создаем поле для вывода
сonclusion.className = 'block-tasks__сonclusion';
blockTasks.appendChild(сonclusion);//добавляем поле в основном блок (section)

const cleaningBtn = document.createElement('button');//создаем кнопку для удаления задач

cleaningBtn.className = 'closeInput btn block-tasks__cleaningBtn';
cleaningBtn.textContent = "Очистить список задач";
blockTasks.appendChild(cleaningBtn);//добавляем кнопку в основном блок (section)


const inputNoTasks = document.createElement('span');// надпись "Нет задач"
inputNoTasks.className = 'no-tasks';
inputNoTasks.textContent = "Нет задач";
сonclusion.appendChild(inputNoTasks);// добавляем элемент в div - поле для вывода




// функция при нажатии на кнопку "Добавить"
inputBtn.addEventListener('click', function addTask() {


  inputNoTasks.remove();//удаляем "Нет задач"
  cleaningBtn.removeAttribute('disabled'); //кнопка "очистить список задач" активна
  cleaningBtn.classList.remove('closeInput'); //удаляем класс с display: none;
  cleaningBtn.classList.add('block-tasks__cleaningBtn');// стилизуем активную кнопку


  const taskList = document.createElement('ul');//контейнер для задач
  сonclusion.appendChild(taskList);//добавляем контейнер для задач в div
  const node = document.createElement("li");//контейнер для записи каждой задачи


  let randomImage = new Array();//массив с иконками
  randomImage[0] = "/img/icon.png";
  randomImage[1] = "/img/icon1.png";
  randomImage[2] = "/img/icon2.png";
  randomImage[3] = "/img/icon3.png";
  randomImage[4] = "/img/icon4.png";
  let imgIndex = Math.floor(Math.random() * randomImage.length);//находим рандомную иконку (в дальнейшем выводим с задачей)


  // если поле для ввода пустое выводим "Новая задача" в LI-контейнер
  if (input.value == '' || input.value == ' ') {
    input.value = "Новая задача";
  }


  //создаем строку с задачей и добовляем ее в контейнер для задач
  node.innerHTML += `<img class="icon" src="${randomImage[imgIndex]}" alt="иконка кактус"> ${input.value} <span class="close">\u00D7</span>`;
  input.value = '';
  taskList.appendChild(node);//добавляем задачу в LI-контейнер}


  //делаем активным крестик у каждой задачи
  const close = document.getElementsByClassName("close");
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }

  //при клике на задачу добавляем класс
  taskList.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

})


// функция при нажатии на кнопку "очистить список задач"
cleaningBtn.addEventListener('click', function cleanTaskList() {
  сonclusion.textContent = ""; //очищаем div-контейнер от задач
  сonclusion.appendChild(inputNoTasks);// "Нет задач" добавляем надпись в div
  cleaningBtn.setAttribute('disabled', true);//кнопка "очистить список задач" не активна
  cleaningBtn.className = 'btn btn:disabled';//стилизуем неактивную кнопку
})

//*** Задание под звездочкой
const sectionNamb = document.querySelector('.block-namber')//находим основной блок (section)
sectionNamb.className = 'sectionNamb';
const inputNamb = document.createElement("input");
sectionNamb.appendChild(inputNamb);//добавляем в основной блок поле для ввода числа 

const btn = document.createElement('button');//создаем кнопку 
btn.className = '';
btn.textContent = "+";
sectionNamb.appendChild(btn);//добавляем кнопку в основном блок (section)

const divNamb = document.createElement('div')//создаем поле для вывода
divNamb.className = 'divNamb';
sectionNamb.appendChild(divNamb);//добавляем его в основном блок (section)

const span1 = document.createElement('span');
const span2 = document.createElement('span');
const span3 = document.createElement('span');
const span4 = document.createElement('span');
divNamb.appendChild(span1);
divNamb.appendChild(span2);
divNamb.appendChild(span3);
divNamb.appendChild(span4);

btn.addEventListener('click', function namberN() {

  const namb = inputNamb.value;//записываем число в переменную
  inputNamb.value = "";
  span1.textContent = `Вы ввели число: ${namb}`; //выводим число
  span2.textContent = `Цифр в числе: ${namb.length}`;//выводим количество цифр в числе

  let nambers = namb.split("");//разбиваем число на массив из цифр


  function sum(nambers) {
    let s = 0;
    for (i = 0; i < nambers.length; i++) {
      s += nambers[i]
    }
    return s
  }


  // span3.textContent = `Цифры: ${nambers.join(" ")}`;//выводим 

  // const nambersR = nambers.reverse();
  // span4.textContent = `Oбратный порядок цифр: ${nambersR.join(" ")}`

})