const taskManager = new TaskManager();
taskManager.load();
taskManager.render();


const validFormFieldInput = (data) => {
    data.preventDefault();

    const newWeaponSystem = document.querySelector('#formWeaponSystem');
    const weaponSystem = newWeaponSystem.value;

    const newCaliber = document.querySelector('#formCaliber');
    const caliber = newCaliber.value;

    const newAmmoType = document.querySelector('#formAmmoType');
    const ammoType = newAmmoType.value;

    const newMOAdata = document.querySelector('#formMOAdata');
    const moa = newMOAdata.value;

    taskManager.addTask(weaponSystem, caliber, ammoType, moa);
    taskManager.render();
    taskManager.save();
    document.querySelector('#taskFormEntry').reset();

}


const runButton = document.querySelector('#taskFormEntry');
runButton.addEventListener('submit', validFormFieldInput);


/*
const doneClick = document.querySelector('#taskList');
doneClick.addEventListener('click', (event) => {
    if (event.target.classList.contains('done-button')) {
        const parentTask = event.target.parentElement.parentElement.parentElement;
        const taskId = parseInt(parentTask.dataset.taskId);
        const task = taskManager.getTaskById(taskId);
        task.status = "Done";
        taskManager.render(task);
        taskManager.save();
    } else 
    
        
    if (event.target.classList.contains('delete-button')) {
        const parentTask = event.target.parentElement.parentElement.parentElement;
        const taskId = parseInt(parentTask.dataset.taskId);
        taskManager.deleteTask(taskId);
        taskManager.save();
        taskManager.render();
    }
});

*/