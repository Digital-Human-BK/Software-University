function solve() {
    const openField = document.querySelector('.wrapper > section:nth-child(2) > div:nth-child(2)');
    const inProgress = document.getElementById('in-progress');
    const complete = document.querySelector('.wrapper > section:nth-child(4) > div:nth-child(2)');

    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', addTask);

    function addTask(ev) {
        ev.preventDefault();

        if (task.value.trim() != '' && description.value.trim() != '' && date.value.trim() != '') {
            const startBtn = el('button', { className: 'green' }, 'Start');
            const deleteBtn = el('button', { className: 'red' }, 'Delete');

            const newArticle = el('article', {},
                el('h3', {}, `${task.value}`),
                el('p', {}, `Description: ${description.value}`),
                el('p', {}, `Due Date: ${date.value}`),
                el('div', { className: 'flex' }, startBtn, deleteBtn)
            );
            startBtn.addEventListener('click', startTask.bind(null, newArticle));
            deleteBtn.addEventListener('click', deleteTask.bind(null, newArticle));

            openField.appendChild(newArticle);

            // document.querySelector('form').reset();
        }
    }

    function startTask(article){
        const div = article.querySelector('div .flex');
        const deleteBtn = el('button', { className: 'red' }, 'Delete');
        const finishBtn = el('button', { className: 'orange' }, 'Finish');
        const newDiv = el('div', {className: 'flex'}, deleteBtn, finishBtn);
        div.remove()
        article.appendChild(newDiv);
        deleteBtn.addEventListener('click', deleteTask.bind(null, article));
        finishBtn.addEventListener('click', finishTask.bind(null, article, newDiv));
        inProgress.appendChild(article);        
    }

    function deleteTask(article){
        article.remove()
    }

    function finishTask(article, div){
        div.remove();
        complete.appendChild(article);
    }

    function el(type, attr, ...content) {
        const element = document.createElement(type);
        Object.assign(element, attr);
        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }
        return element;
    }
}