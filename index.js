const blockTasks = document.querySelector('.block-tasks');//основной блок для планировщика задач (section)

const blockTasksHeader1 = document.createElement('h3');//создаем заголовок1
blockTasksHeader1.className = 'block-tasks__h3';
blockTasksHeader1.textContent = "Запишите задачу";
blockTasks.appendChild(blockTasksHeader1);//добавляем заголовок1 в основном блок (section)


const input = document.createElement('input'); //создаем поле для ввода
input.className = 'block-tasks__input';
blockTasks.appendChild(input);//добавляем поле в основном блок (section)


const inputBtn = document.createElement('button');//создаем кнопку для добавления задач
inputBtn.className = 'block-tasks__inputBtn';
inputBtn.textContent = "Добавить";
blockTasks.appendChild(inputBtn);//добавляем кнопку в основном блок (section)


const blockTasksHeader2 = document.createElement('h3');//создаем заголовок2
blockTasksHeader2.className = 'block-tasks__h3';
blockTasksHeader2.textContent = "Список задач";
blockTasks.appendChild(blockTasksHeader2);//добавляем заголовок2 в основном блок (section)




const сonclusion = document.createElement('div'); //создаем поле для вывода
сonclusion.className = 'block-tasks__сonclusion';
blockTasks.appendChild(сonclusion);//добавляем поле в основном блок (section)


const inputNoTasks = document.createElement('span');// "Нет задач"
inputNoTasks.className = 'no-tasks';
inputNoTasks.textContent = "Нет задач";
сonclusion.appendChild(inputNoTasks);


const cleaningBtn = document.createElement('button');//создаем кнопку для добавления задач
cleaningBtn.className = 'block-tasks__cleaningBtn';
cleaningBtn.textContent = "Очистить список задач";
blockTasks.appendChild(cleaningBtn);//добавляем кнопку в основном блок (section)


inputBtn.addEventListener('click', function addTask() {

  inputNoTasks.remove();//удаляем "Нет задач"

  const taskList = document.createElement('ul');//контейнер для задач
  сonclusion.appendChild(taskList);//добавляем контейнер для задач в div
  const node = document.createElement("li");


  //создаем строку с задачей и добовляем ее в контейнер для задач
  node.innerHTML += `${input.value}` + '<span class="close">\u00D7</span>';
  input.value = '';
  taskList.appendChild(node);


  //делаем активным крестик у элемента
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




cleaningBtn.addEventListener('click', function cleanTaskList() {
  сonclusion.textContent = "";

  const inputNoTasks = document.createElement('span');//добавляем "Нет задач"
  inputNoTasks.className = 'no-tasks';
  inputNoTasks.textContent = "Нет задач";
  сonclusion.appendChild(inputNoTasks);

})
