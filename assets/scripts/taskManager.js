const createTaskHtml = (id, weaponSystem, caliber, ammoType, moa) => {
  const html = `<tr>
  <th scope="row">${id}</th>
  <td>${weaponSystem}</td>
  <td>${caliber}</td>
  <td>${ammoType}</td>
  <td> ${moa}</td>
  </tr>`
  return html;
}


class TaskManager {
  constructor(tasks, currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  addTask(weaponSystem, caliber, ammoType, moa) {
    const task = {
      id: ++this.currentId,
      name: weaponSystem,
      caliber: caliber,
      ammunition: ammoType,
      MOA: moa,
    }
   
    this.tasks.push(task);
  }

  render() {
    const taskHtmlList = [];

    for (let i = 0; i < taskManager.tasks.length; i++) {
      const workingTask = taskManager.tasks[i];
      console.log(workingTask);
      const taskHtml = createTaskHtml(workingTask.id, workingTask.name, workingTask.caliber, workingTask.ammunition, workingTask.MOA);
      taskHtmlList.push(taskHtml);
    }
    const tasksHtml = taskHtmlList.join('\n');
    document.querySelector('#results').innerHTML = tasksHtml;
  }

  getTaskById(taskId) {
    let foundTask;
    for (let i = 0; i < taskManager.tasks.length; i++) {
      const task = taskManager.tasks[i];
      if (task.id === taskId) {
        foundTask = task;
      }
    }
    return foundTask;
  }

  save() {
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJson);
    const currentId = JSON.stringify(this.currentId);
    localStorage.setItem('currentId', currentId);
  }

  load() {
    if (localStorage.getItem('tasks')) {
      const tasksJson = JSON.parse(localStorage.getItem('tasks'));
      this.tasks = tasksJson;
      const currentId = JSON.parse(localStorage.getItem('currentId'));
      this.currentId = parseInt(currentId);
    }
  }

}