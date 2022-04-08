function solve() {
    const trainings = document.querySelector('.modules');
    const [lectureName, date] = document.querySelectorAll('div.form-control input');
    const select = document.querySelector('div.form-control select');
    const addBtn = document.querySelector('div.form-control button');
    addBtn.addEventListener('click', addLecture);

    function addLecture(ev) {
        ev.preventDefault();

        if (lectureName.value.trim() != '' && date.value != '' && select.value != 'Select module') {
            let moduleName = select.value.toUpperCase();
            let dateFormatted = date.value.split('-').join('/').split('T').join(' - ');

            const moduleArray = Array.from(document.querySelectorAll('.module'));
            let module = moduleArray.find(m => m.querySelector('h3').textContent.includes(moduleName));

            if (module === undefined) {
                const deleteBtn = el('button', { className: 'red' }, 'Del');
                deleteBtn.addEventListener('click', deleteLecture);
                const module = el('div', { className: 'module' },
                    el('h3', {}, `${moduleName}-MODULE`),
                    el('ul', {},
                        el('li', { className: 'flex' },
                            el('h4', {}, `${lectureName.value} - ${dateFormatted}`),
                            deleteBtn))
                );
                trainings.appendChild(module);
            } else {
                const deleteBtn = el('button', { className: 'red' }, 'Del');
                deleteBtn.addEventListener('click', deleteLecture);
                const li = el('li', { className: 'flex' },el('h4', {}, `${lectureName.value} - ${dateFormatted}`),deleteBtn);
                const ul = module.querySelector('ul');
                ul.appendChild(li);
                const sortedLi = Array.from(module.querySelectorAll('li')).sort((a,b)=> {
                    let dateA = a.firstChild.textContent.split(' - ')[1];
                    let dateB = b.firstChild.textContent.split(' - ')[1];
                    return dateA.localeCompare(dateB);
                });
                sortedLi.forEach(li =>ul.appendChild(li));
            }
        }
    }

    function deleteLecture(ev) {
        const ul = ev.target.parentElement.parentElement;
        const module = ev.target.parentElement.parentElement.parentElement;
        ev.target.parentElement.remove();

        if(Array.from(ul.children).length === 0) {
            module.remove();
        }

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
};