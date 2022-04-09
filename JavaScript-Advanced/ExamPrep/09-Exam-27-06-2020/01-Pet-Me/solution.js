function solve() {
    const [name, age, kind, owner] = document.querySelectorAll('#container input');
    const adoptionSection = document.querySelector('#adoption ul');
    const adoptedSection = document.querySelector('#adopted ul');
    const addBtn = document.querySelector('#container button');

    addBtn.addEventListener('click', addNewPet);

    function addNewPet(ev) {
        ev.preventDefault();

        const petName = name.value.trim();
        const petKind = kind.value.trim();
        const petOwner = owner.value.trim();
        const petAge = Number(age.value);

        if (petName != '' && petKind != '' && petOwner != '' && petAge != '' && Number.isNaN(petAge) === false) {

            const contactBtn = el('button', {}, 'Contact with owner');

            const petLi = el('li', {},
                el('p', {},
                    el('strong', {}, petName),
                    ' is a ',
                    el('strong', {}, petAge),
                    ' year old ',
                    el('strong', {}, petKind),
                ),
                el('span', {}, `Owner: ${petOwner}`),
                contactBtn
            )
            contactBtn.addEventListener('click', contactOwner.bind(null, contactBtn, petLi));
            adoptionSection.appendChild(petLi);

            document.getElementById('add').reset();
        }
    }

    function contactOwner(btn, petLi) {
        const takeItBtn = el('button', {}, 'Yes! I take it!');
        const newOwnerInput = el('input', { placeholder: 'Enter your names' }, '')

        const div = el('div', {},
            newOwnerInput,
            takeItBtn
        )

        btn.remove();
        takeItBtn.addEventListener('click', takeIt.bind(null, newOwnerInput, takeItBtn, petLi));
        petLi.appendChild(div);
    }

    function takeIt(newOwnerInput, takeItBtn, petLi) {
        if (newOwnerInput.value != '') {
            const checkedBtn = el('button', {}, 'Checked')
            petLi.querySelector('span').textContent = `New Owner: ${newOwnerInput.value}`;
            takeItBtn.remove();
            newOwnerInput.remove();

            petLi.appendChild(checkedBtn);
            checkedBtn.addEventListener('click', function(){petLi.remove()});

            adoptedSection.appendChild(petLi);
        }
    }

    function el(type, attr, ...content) {
        const element = document.createElement(type);
        Object.assign(element, attr);

        for (let item of content) {
            if (typeof item === 'number' || typeof item === 'string') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }
        return element;
    }
}