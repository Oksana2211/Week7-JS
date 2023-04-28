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


const сonclusion = document.createElement('textarea'); //создаем поле для вывода
сonclusion.className = 'block-tasks__сonclusion';
blockTasks.appendChild(сonclusion);//добавляем поле в основном блок (section)


const cleaningBtn = document.createElement('button');//создаем кнопку для добавления задач
cleaningBtn.className = 'block-tasks__cleaningBtn';
cleaningBtn.textContent = "Очистить список задач";
blockTasks.appendChild(cleaningBtn);//добавляем кнопку в основном блок (section)


inputBtn.addEventListener('click', function addTask () {
let task = input.value;//введеную задачу записываем в переменную 
сonclusion.value = task;//и выводим
let tasks = [];


})









console.log();