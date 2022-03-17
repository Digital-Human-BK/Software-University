function solve() {
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const dueDate = document.getElementById('date');
    const sections = document.getElementsByTagName('section');

    const add = document.getElementById('add');
    add.addEventListener('click', addTask);

    function addTask(ev) {
        ev.preventDefault();

        if (task.value != '' && description.value != '' && dueDate.value) {
            const newArticle = document.createElement('article');
            let newTask = task.value;
            let newDescription = description.value;
            let newDate = dueDate.value;

            newArticle.innerHTML =
                `<h3>${newTask}</h3>
            <p>Description: ${newDescription}</p>
            <p>Due Date: ${newDate}</p>
            <div class="flex">
                <button class="green">Start</button>
                <button class="red">Delete</button>
            </div>`;
            sections[1].lastElementChild.appendChild(newArticle);

            task.value = '';
            description.value = '';
            dueDate.value = '';

            const [startBtn, deleteBtn] = newArticle.getElementsByTagName('button');
            startBtn.addEventListener('click', clickStart);
            deleteBtn.addEventListener('click', clickDelete);
        }
    }
    //event functions
    function clickStart(ev) {
        const article = ev.target.parentNode.parentNode;
        article.lastElementChild.innerHTML =
            `<button class="red">Delete</button>
            <button class="orange">Finish</button>`;

        sections[2].lastElementChild.appendChild(article);

        const [deleteBtn, finishBtn] = article.getElementsByTagName('button');
        deleteBtn.addEventListener('click', clickDelete);
        finishBtn.addEventListener('click', clickFinish);
    }
    function clickDelete(ev) {
        ev.target.parentNode.parentNode.remove();
    }
    function clickFinish(ev) {
        const article = ev.target.parentNode.parentNode;
        sections[3].lastElementChild.appendChild(article);
        article.lastElementChild.remove();
    }
}