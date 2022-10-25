const newTask = document.querySelector('.input-task');
const taskSave = document.querySelector('.btn-task-add');
const taskList = document.querySelector('.task-list');


 

taskSave.addEventListener('click', taskAdd);
taskList.addEventListener('click', taskDeleteCompleted);

function taskAdd(e) {
	e.preventDefault();
	//div create
	const  taskDiv = document.createElement('div');
	taskDiv.classList.add('container-item');

	//li create
	const taskLi = document.createElement('li');
	taskLi.classList.add('task-item');
	taskLi.innerText = newTask.value;
	taskDiv.appendChild(taskLi);


	//ul add
	taskList.appendChild(taskDiv);

	//complete button add
	const taskCompleteBtn = document.createElement('button');
	taskCompleteBtn.classList.add('btn');
	taskCompleteBtn.classList.add('task-complete');
	taskCompleteBtn.innerHTML= '<i class="fa-solid fa-circle-check"></i>'

	taskDiv.appendChild(taskCompleteBtn);

	//delete button add
	const taskDeleteBtn = document.createElement('button');
	taskDeleteBtn.classList.add('btn');
	taskDeleteBtn.classList.add('task-delete');
	taskDeleteBtn.innerHTML= '<i class="fa-solid fa-trash"></i>'

	taskDiv.appendChild(taskDeleteBtn);

	newTask.value = '';

}



function taskDeleteCompleted(e) {

	const  clickedElement = e.target;
	if (clickedElement.classList.contains('task-complete')) {
		console.log('check');
		clickedElement.parentElement.classList.toggle('task-completed');

	}	
	if (clickedElement.classList.contains('task-delete')) {
		console.log('delete');
		clickedElement.parentElement.remove();
		
	}
	
}







































