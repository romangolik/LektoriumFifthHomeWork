document.addEventListener("DOMContentLoaded", function(){
    addListenerToAddTask();
});

function addListenerToAddTask() {
    document.querySelector('.add-task').onclick = function() {
        let valueTask = document.querySelector('.input-task').value;
        if(!valueTask.trim()) {
            alert("Please, enter your text");
            return false;
        }
        let ant = document.querySelector(".todos-container");
        ant.innerHTML+="<div class='todo-container'><strong class='text'>"+ valueTask +"</strong><button class='edit-task' onclick='addListenerAddEditTask()'>Edit</button><button class='delete-task' onclick='addListenerToDeleteTask()'>Delete</button></div>";
        document.querySelector('.input-task').value = '';
        //addListenerToDeleteTask()
        //addListenerAddEditTask();
    }

}

function addListenerToDeleteTask() {
    let div = Array.from(document.querySelectorAll('.todo-container'));
        div.forEach((e) => {
            e.onclick = function() {
                this.remove();
            }
        });
}

function addListenerAddEditTask() {
    let valueEditTask;
    let modal = document.querySelector('.modal');
    let height = modal.offsetHeight;
    modal.style.marginTop = -height/2 + 'px';
    modal.style.top = "50%";

    let inputForEdit = document.querySelector('.input-task-edit');
    let div = Array.from(document.querySelectorAll('.todo-container'));
    div.forEach((e) => {
        e.onclick = function() {
            valueEditTask = this.querySelector('.text');
            inputForEdit.value = valueEditTask.innerText;
        }
    });

    document.querySelector('.save-changes').onclick = function () {
        if (!inputForEdit.value.trim()) {
            alert("Please, enter your text");
            return false;
        }
        valueEditTask.innerText = inputForEdit.value;
        modal.style.top = '-100%';
    }
    closeModal();
}

function closeModal() {
    document.querySelector('.close').onclick = function () {
        document.querySelector('.modal').style.top = '-100%';
    }
}