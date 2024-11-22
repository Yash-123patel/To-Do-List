//getting Task from html
function addTask():void{
    const taskToAdd:any=document.getElementById('todoInput')as HTMLInputElement |null
    if(taskToAdd){
        if(taskToAdd.value.trim()==""){
            alert("Please Enter Task Name")
        }
         else{
            addTaskToList(taskToAdd.value);
            taskToAdd.value='';
         }
    }
}
 
//adding task  in our list and delete button  for every task
function addTaskToList(task:string):void{
    let todoList=document.getElementById('todoList')as HTMLUListElement | null
    if(todoList){
        let noTask=document.getElementById('noTask');
        noTask?.classList.add('hidden');
 
        //creating one dive to display all
        let taskContainer = document.createElement('div');
        taskContainer.classList.add('flex', 'items-center', 'justify-between');
 
        //creating li and adding task
        let newTask = document.createElement("li");
        newTask.textContent = task;
        newTask.classList.add('list-disc', 'p-2', 'border-b', 'border-gray-300', 'text-gray-800');
 
        //creating delete button to delete
        let deleteTaskButton = document.createElement('button');
        deleteTaskButton.classList.add('bg-red-600', 'text-white', 'ml-4', 'px-2', 'py-1', 'rounded');
        deleteTaskButton.textContent = "Delete";
        deleteTaskButton.onclick = function () {
            todoList.removeChild(taskContainer);
 
        };
       
       
        taskContainer.appendChild(newTask);
        taskContainer.appendChild(deleteTaskButton);
        todoList.appendChild(taskContainer);
    }
}