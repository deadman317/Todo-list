let input = document.querySelector('.todo-input');
let add = document.querySelector('.add-btn');
let tasks = document.querySelector('.tasks');


add.addEventListener('click', function () {
    let task = input.value;
    if (task) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p>${task}</p>
        <div class="item-btn">
            <i class="fa-solid fa-check"></i>
            <i class="fa-sharp fa-solid fa-circle-xmark"></i>
        </div>`;

        tasks.appendChild(newItem);
        input.value = '';
    }
    else {
        alert('Enter a task');
    }
})

//remove task
tasks.addEventListener('click', function (e) {
    if (e.target.classList.contains('fa-circle-xmark')) {
        e.target.parentElement.parentElement.remove();
    }
})

//complete task
tasks.addEventListener('click', function (e) {
    if (e.target.classList.contains('fa-check')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})