//Task class: represent a task
class task {
  constructor(title, desc) {
    this.title = title;
    this.desc = desc;
  }
}

//interface class
class ui {
  static displayTask() {
    const storedTask = [
      {
        title: "home work",
        desc: "collage work",
      },
      {
        title: "home work",
        desc: "collage work",
      },
    ];

    const task = storedTask;

    task.forEach((task) => ui.addTaskToList(task));
  }

  static addTaskToList(task) {
    const list = document.querySelector("#task-list");

     const row = document.createElement('tr')

     row.innerHTML = `
        <td>${task.title}</td>
        <td>${task.desc}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
     `;
     list.appendChild(row);
  }
}

// storage class

//event to display book
document.addEventListener('DOMContentLoaded',ui.displayTask)
//add a book
document.querySelector('#task-form').addEventListener('submit')
//remove a book
