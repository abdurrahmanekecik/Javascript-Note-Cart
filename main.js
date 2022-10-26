const newTask = document.querySelector('.input-task');
const taskSave = document.querySelector('.btn-task-add');
const taskList = document.querySelector('.task-list');


taskSave.addEventListener('click', taskAdd);
taskList.addEventListener('click', taskDeleteCompleted);
document.addEventListener('DOMContentLoaded', localStorageRead);


function taskAdd(e) {
	e.preventDefault();

	if (newTask.value.length > 0) {

	taskItemCreate(newTask.value);
	localStorageSave(newTask.value);
	newTask.value='';

	}
	else{
		alert("You need to enter value.");
	}
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
		const taskDelete = clickedElement.parentElement.children[0].innerText;
		localStorageDelete(taskDelete);
		
	}
	
}


function taskItemCreate(task) {
	//div create
	const  taskDiv = document.createElement('div');
	taskDiv.classList.add('container-item');

	//li create
	const taskLi = document.createElement('li');
	taskLi.classList.add('task-item');
	taskLi.innerText = task;
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

}



function localStorageArray(){

	let tasks;

	if (localStorage.getItem('tasks') === null) {

		tasks=[];

	}

	else{
		tasks = JSON.parse(localStorage.getItem('tasks'));

	}

	return tasks;
}




function localStorageSave(newTask) {
	
	let tasks = localStorageArray();

	tasks.push(newTask);
	localStorage.setItem('tasks', JSON.stringify(tasks));
}



function localStorageRead() {

	let tasks = localStorageArray();
	tasks.forEach(function (task) {
		taskItemCreate(tasks);
	
	})




}


function localStorageDelete(task){


	let tasks = localStorageArray();
	
	const elementDeleteIndex = tasks.indexOf('task');
	tasks.splice(elementDeleteIndex, 1);
	localStorage.setItem('tasks', JSON.stringify(tasks));
 }


