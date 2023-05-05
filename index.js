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


  // если поле для ввода пустое выводим "Новая задача" в LI-контейнер
  if (input.value == '' || input.value == ' ') {
    node.innerHTML += "Новая задача" + '<span class="close">\u00D7</span>';
  }


  //создаем строку с задачей и добовляем ее в контейнер для задач
  node.innerHTML += `${input.value}` + '<span class="close">\u00D7</span>';
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
